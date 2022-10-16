function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    const namedFunction = x => 'hello';
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {'hello'};
}