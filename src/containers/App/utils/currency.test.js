import { getCurrencySymbol } from './currency';

it('Get currency symbols', () => {
    expect(getCurrencySymbol('USD')).toEqual('$');
    expect(getCurrencySymbol('EUR')).toEqual('€');
    expect(getCurrencySymbol('JPY')).toEqual('$');
});
