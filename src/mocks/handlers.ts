import {ITodo} from '../types/types'
import { rest } from "msw";
import { todoMocks } from "./todoMocks";
 
export const successHandlers = [
 rest.get("https://jsonplaceholder.typicode.com/todos", (_, res, ctx) =>
   res(ctx.status(200), ctx.json<ITodo[]>(todoMocks))
 ),
];
 
export const faileHandlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (_, res, ctx) =>
    res(ctx.status(404, 'todos not Found'), ctx.json<ITodo[]>(todoMocks))
  ),
 ];