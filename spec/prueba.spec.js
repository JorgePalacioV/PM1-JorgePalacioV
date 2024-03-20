describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

let repository;
describe("Clase Repository", () => {
  beforeEach(() => {
    repository = new Repository();
  });
  it("Repository  debe ser una clase", () => {
    expect(typeof Pepository.prototype.constructor).toBe("function");
  });
  it("Debería ser una clase", () => {
    expect(repository instanceof Repository).toBe(true);
  });
  it("Debería tener un método llamado getAllActivities", () => {
    expect(typeof Repository);
  });
});
