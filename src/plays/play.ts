export abstract class Play {

    abstract play(sides?: number): string | number;

    protected randomize(sides: number): number {
        return Math.floor(Math.random() * sides);
    }

}
