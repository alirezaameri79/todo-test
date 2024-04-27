import React from "react";
import { screen, waitFor, render } from "@testing-library/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { server , fakeServer } from "./mocks/server";
import App from "./App";
import { apiSlice } from "./api/apiSlice";
 
describe("Success Todos", () => {
 beforeAll(() => {
   server.listen();
 });
 
 afterEach(() => {
   server.resetHandlers();
 });
 
 afterAll(() => {
   server.close();
 });
 
 it("should display todos", async () => {
   render(
     <ApiProvider api={apiSlice}>
       <App />
     </ApiProvider>
   );
 
   await waitFor(() => {
     expect(screen.getByText("sed ut vero sit molestiae")).toBeInTheDocument();
   });
 });
});

describe("Fail Todos", () => {
  beforeAll(() => {
    fakeServer.listen();
  });
  
  afterEach(() => {
    fakeServer.resetHandlers();
  });
  
  afterAll(() => {
    fakeServer.close();
  });
  
  it("should not display todos with mock api and render Error", async () => {
    render(
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    );
  
    await waitFor(() => {
      expect(screen.getByTestId("error")).toHaveTextContent('Error:');
    });
  });
 });