import AssignController from "./controller/AssignController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    const views = {
      inputView: InputView,
      outputView: OutputView,
    };

    await new AssignController(views).assign();
  }
}

export default App;
