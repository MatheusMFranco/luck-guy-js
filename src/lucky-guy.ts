import { Language } from './entities/language.type';
import { Binary } from './plays/binary';
import { Custom } from './plays/custom';
import { FlipCoin } from './plays/flip-coin';
import { OneTwoGo } from './plays/one-two-go';
import { RollDice } from './plays/roll-dice';
import { SaySomething } from './plays/say-something';
import { ShakeHand } from './plays/shake-hand';
import { ShowLetter } from './plays/show-letter';

/**
 * The Facade class provides a simplified interface for interacting with various "play" games such as rolling dice,
 * flipping coins, binary outcomes, and custom lists. It allows setting and getting the language and offers methods
 * for different game logic.
 *
 * The following languages are supported:
 * - 'en' (English)
 * - 'pt' (Portuguese)
 * - 'es' (Spanish)
 * - 'fr' (French)
 * - 'de' (German)
 * - 'it' (Italian)
 * - 'ru' (Russian)
 * - 'zh' (Chinese)
 * - 'ja' (Japanese)
 * - 'ar' (Arabic)
 * - 'hi' (Hindi)
 */
export class LuckyGuy {
  #language: Language;

  /**
   * Constructs a new LuckyGuy instance with the specified language.
   * @param language - The language to use for operations that depend on localization.
   * @default 'en' (English)
   */
  constructor(language?: Language) {
    this.#language = language || 'en';
  }

  /**
   * Sets the language for localized games like FlipCoin, SaySomething, and ShakeHand.
   * @param language - The new language to set.
   */
  set language(language: Language) {
    this.#language = language;
  }

  /**
   * Gets the current language used for localization in games.
   * @returns {Language} The currently set language.
   */
  get language(): Language {
    return this.#language;
  }

  /**
   * Plays a binary game, returning either 0 or 1.
   * @returns {number} - A number representing a binary outcome (0 or 1).
   */
  public binary(): number {
    return new Binary().play();
  }

  /**
   * Rolls a dice with the specified number of sides. Default is 6 sides.
   * @param sides - The number of sides of the dice (default is 6).
   * @default 6
   * @returns {number} - A number representing the outcome of the dice roll.
   */
  public dice(sides = 6): number {
    return new RollDice().play(sides);
  }

  /**
   * Flips a coin and returns the result based on the current language.
   * @returns {string} - A string representing the coin flip outcome ('Heads' or 'Tails') in the current language.
   */
  public coin(): string {
    return new FlipCoin(this.language).play();
  }

  /**
   * Returns a confirmation result such as "Yes" or "No" based on the current language.
   * @returns {string} - A string representing "Yes" or "No" in the current language.
   */
  public confirmation(): string {
    return new SaySomething(this.language).play();
  }

  /**
   * Plays a game of rock-paper-scissors (jokenpo) and returns the result in the current language.
   * @returns {string} - A string representing the outcome of rock-paper-scissors (e.g., 'Rock', 'Paper', or 'Scissors').
   */
  public jokenpo(): string {
    return new ShakeHand(this.language).play();
  }

  /**
   * Returns a random letter from the alphabet in the current language.
   * @returns {string} -  A string representing a randomly selected letter.
   */
  public alphabet(): string {
    return new ShowLetter(this.language).play();
  }

  /**
   * Returns the result of the "Odds or Evens" game.
   * @param {number} firstHand - The value of the first hand (e.g., the number of fingers shown).
   * @param {number} secondHand - The value of the second hand (e.g., the number of fingers shown).
   * @returns {string} - A string representing the game outcome.
   */
  public oddsAndEvens(firstHand: number, secondHand: number): string {
    return new OneTwoGo(this.language).play(firstHand + secondHand);
  }

  /**
   * Plays a custom game using a provided list of options and returns a random option.
   * @param list - An array of strings representing the custom list of options.
   * @returns {string} - string A string representing a randomly selected option from the list.
   */
  public custom(list: string[]): string {
    return new Custom(list).play();
  }
}
