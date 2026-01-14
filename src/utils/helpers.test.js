import { formatDate, isMobile, scrollToElement, capitalizeWords } from './helpers';

Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
});

describe('helpers', () => {
  describe('formatDate', () => {
    test('formats date correctly', () => {
      const date = new Date('2023-12-25');
      const formatted = formatDate(date);
      expect(formatted).toContain('dezembro');
      expect(formatted).toContain('2023');
    });
  });

  describe('isMobile', () => {
    test('returns false for desktop width', () => {
      window.innerWidth = 1024;
      expect(isMobile()).toBe(false);
    });

    test('returns true for mobile width', () => {
      window.innerWidth = 500;
      expect(isMobile()).toBe(true);
    });
  });

  describe('scrollToElement', () => {
    beforeEach(() => {
      Element.prototype.scrollIntoView = jest.fn();
      document.getElementById = jest.fn();
    });

    test('scrolls to element when element exists', () => {
      const mockElement = {
        scrollIntoView: jest.fn(),
      };
      document.getElementById.mockReturnValue(mockElement);

      scrollToElement('test-id');
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
      });
    });

    test('does not throw when element does not exist', () => {
      document.getElementById.mockReturnValue(null);
      expect(() => scrollToElement('non-existent')).not.toThrow();
    });
  });

  describe('capitalizeWords', () => {
    test('capitalizes first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('react javascript')).toBe('React Javascript');
    });

    test('handles single word', () => {
      expect(capitalizeWords('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(capitalizeWords('')).toBe('');
    });
  });
});

