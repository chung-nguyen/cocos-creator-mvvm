import { Component } from 'cc';
import ObservableValue from './ObservableValue';

export default class ViewContext extends Component {
  protected observedValues = new Set<ObservableValue<any>>();

  public observe (value: ObservableValue<any>, funs: Function | Function[]) {
    if (this.observedValues.has(value)) {
      return;
    }

    if (Array.isArray(funs)) {
      funs.forEach((fun) => fun && value.registerObserver(this, fun));
    } else {
      value.registerObserver(this, funs);
    }
    this.observedValues.add(value);
  }

  protected onDestroy(): void {
    this.observedValues.forEach((value) => value.unregisterAllObservers(this));
    this.observedValues.clear();
  }
}
