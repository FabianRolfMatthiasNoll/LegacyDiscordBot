import { Kantine } from "./commands/Kantine";
import { Stundenplan } from "./commands/Stundenplan";
import { Command, ContextMenuCommand } from './types/command';
import { Zitat } from './commands/Zitat';
import { Verify } from './commands/Verify';
import { Essen } from './commands/Essen';
import { Caesar } from "./commands/Caesar"; 
import { LiveTicker } from './commands/Liveticker';
import { Dalle } from './commands/Dalle';
import { Ask } from "./commands/Ask";
import { Wetter, GrillWetter } from './commands/Wetter';
import { RemindMe } from "./commands/RemindMe";

// Register Commands of the bot
export const Commands: (Command | ContextMenuCommand)[] = [Stundenplan, Kantine, Zitat, Verify, Caesar, LiveTicker,  Ask, Wetter, GrillWetter, RemindMe];
