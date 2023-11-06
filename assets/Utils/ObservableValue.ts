type ObserverList = {
  listener: Object,
  observers: Function[]
}

export default class ObservableValue<T> {
  private _value: T;
  private _listeners: ObserverList[] = [];

  constructor (initialVlue: T) {
    this._value = initialVlue;
  }

  public get value (): T {
    return this._value;
  }

  public set value (v: T) {
    const oldValue = this._value;
    this._value = v;

    this._listeners.forEach((listener) => {
      listener.observers.forEach((fun) => fun(v, oldValue));
    })
  }

  public registerObserver(listener: Object, fun: Function) {
    if (!listener || !fun) {
      return;
    }

    let list = this._listeners.find((it) => it.listener === listener);
    if (!list) {
      list = {
        listener,
        observers: []
      }
      this._listeners.push(list)
    }

    list.observers.push(fun);
  }

  public unregisterAllObservers (listener: Object) {
    let list = this._listeners.find((it) => it.listener === listener);
    if (list) {
      list.observers.length = 0;
    }
  }
}
