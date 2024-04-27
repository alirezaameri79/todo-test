import { setupServer } from "msw/node";
import { successHandlers ,faileHandlers } from "./handlers";
 
export const server = setupServer(...successHandlers);

export const fakeServer = setupServer(...faileHandlers);