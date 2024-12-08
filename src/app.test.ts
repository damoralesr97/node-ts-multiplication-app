import { ServerApp } from "./presentation/server.app";

describe("Test App.ts", () => {
  test("should call Server.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ["node", "app.ts", "-b", "10", "-s"];

    await import("./app");

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10,
      showTable: true,
      destination: "outputs",
      limit: 10,
      name: "multiplication-table",
    });
  });
});
