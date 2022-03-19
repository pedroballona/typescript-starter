import { helloWorld } from ".";

it("helloWorld should print the correct phrase", () => {
  const logFunction = jest.fn();
  helloWorld({
    logFunction,
  });
  expect(logFunction).toHaveBeenCalledTimes(1);
  expect(logFunction).toHaveBeenCalledWith("Hello world");
});
