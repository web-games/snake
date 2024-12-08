import Game from "./org/Application"
import ApplicationFacade from "./org/ApplicationFacade";

window.themeColor = 0x4CAF50;

ApplicationFacade.getInstance(Game.NAME).startup();