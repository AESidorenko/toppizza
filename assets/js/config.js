const Config = new class
{
    constructor()
    {
        this.currencyRate = 1.15; // 1 USD for 1 EUR - todo: make it configurable

        this.currencyStringRule = this.currencyStringRule.bind(this);
    }

    currencyStringRule(euro, code)
    {
        const prefix = code === 'EUR' ? '\u20AC' : '$';
        const rate   = code === 'EUR' ? 1 : this.currencyRate; // todo: make it configurable

        return prefix + (rate * parseFloat(euro)).toFixed(2).toString();
    }
};

export default Config;