const doStuff = (input: string) => "expected";

it("should do stuff", () => {
  const input = "lets go";
  const expectedOutput = "expected";

  // Assert
  const output = doStuff(input);
  expect(output).toEqual(expectedOutput);
});
