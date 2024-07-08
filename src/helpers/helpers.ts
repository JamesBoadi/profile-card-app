

export function measureWords(str: string)
{
    if(str.length < 30)
        return 'adjust-spacing';
    else
        return '';
}

export function isNullOrUndefined(value: any): boolean
{
    if(value === null || value === undefined)
        return true;

    return false;
}