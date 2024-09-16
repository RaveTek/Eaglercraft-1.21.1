// Abstract class to simulate the Java interface `abt`
class Abt {
  /**
   * Abstract method that should be implemented by subclasses.
   * Any class implementing this should provide its own methods.
   */
  someMethod() {
    throw new Error('Method "someMethod" must be implemented by subclass.');
  }
}

// Placeholder classes for annotations (not applicable in JavaScript but documented)
class ParametersAreNonnullByDefault {}
class W {}
class U {}

// Example usage of the annotations in comments
/**
 * @ParametersAreNonnullByDefault
 * @w
 * @u
 */
