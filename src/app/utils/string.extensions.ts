// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
    isEmpty(): boolean;
}

String.prototype.isEmpty = function (): boolean {
    return this.length === 0;
};
