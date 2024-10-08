<div align="center">

# Super Lucky Guy!

[![Basic validation](https://github.com/actions/labeler/actions/workflows/basic-validation.yml/badge.svg?branch=main)](https://github.com/actions/labeler/actions/workflows/basic-validation.yml)
[![npm version](https://badge.fury.io/js/super-lucky-guy.svg)](http://badge.fury.io/js/super-lucky-guy)



Lucky Guy is a facade class providing a simplified interface for interacting with various "starter" games, such as rolling dice, flipping coins, binary outcomes, and custom lists. It supports multiple languages, making it flexible for different locales.

</div>

## Features

- **Binary Outcomes:** Get either a `0` or `1`.
- **Dice Rolling:** Roll a dice with customizable sides (default is 6).
- **Coin Flipping:** Flip a coin and get localized results like "Heads" or "Tails".
- **Confirmation Games:** Get results like "Yes" or "No" based on the selected language.
- **Rock-Paper-Scissors (Jokenpo):** Play rock-paper-scissors in different languages.
- **Random Alphabet Letter:** Get a random letter from the alphabet.
- **Odds and Evens Game:** Sum two numbers and determine the result.
- **Custom List Game:** Choose a random option from a provided list.

## Supported Languages

The app supports multiple languages:

- English (`en`)
- Portuguese (`pt`)
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Italian (`it`)
- Russian (`ru`)
- Chinese (`zh`)
- Japanese (`ja`)
- Arabic (`ar`)
- Hindi (`hi`)

## Installation

To use the LuckyGuy class in your project:

```bash
npm i super-lucky-guy
```

```ts
import { LuckyGuy } from 'super-lucky-guy';

const lucky = new LuckyGuy(); //'en' - English is default
```

## Methods

| Method                                                | Description                                                                      | Default Values | Return     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------- | -------------- | ---------- |
| `language(language: Language)`                        | Set the current language for localized games.                                    | None           | None       |
| `language()`                                          | Get the current language being used for localization.                            | None           | `Language` |
| `binary()`                                            | Play a binary game, returning either 0 or 1.                                     | None           | `number`   |
| `dice(sides)`                                         | Roll a dice with the specified number of sides.                                  | `6`            | `number`   |
| `coin()`                                              | Flip a coin and get the result in the current language.                          | None           | `string`   |
| `confirmation()`                                      | Receive a confirmation result such as "Yes" or "No".                             | None           | `string`   |
| `jokenpo()`                                           | Play rock-paper-scissors and get the result.                                     | None           | `string`   |
| `alphabet()`                                          | Get a random letter from the alphabet in the current language.                   | None           | `string`   |
| `oddsAndEvens(firstHand: number, secondHand: number)` | Play an odds-and-evens game using the sum of two numbers.                        | None           | `string`   |
| `custom(list: string[])`                              | Play a custom game and return a randomly selected option from the provided list. | None           | `string`   |

## Example

```typescript
const lucky = new LuckyGuy('pt');

// Flip a coin
console.log(lucky.coin()); // Outputs: "Cara" or "Coroa" (Heads or Tails in Portuguese)

// Play rock-paper-scissors
console.log(lucky.jokenpo()); // Outputs: "Pedra", "Papel", or "Tesoura" (Rock, Paper, Scissors in Portuguese)
```
