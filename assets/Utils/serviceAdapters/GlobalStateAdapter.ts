import ObservableValue from "../ObservableValue";

export default interface GlobalStateAdapter {
    get tabIndex(): ObservableValue<number>;
}
