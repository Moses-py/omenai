function createCustomErrorClass(name: string) {
  return class CustomError extends Error {
    public readonly name: string;

    constructor(message: string) {
      super(message);
      this.name = name;
    }

    toJSON() {
      return {
        name: this.name,
        message: this.message,
      };
    }
  };
}

export default createCustomErrorClass;
