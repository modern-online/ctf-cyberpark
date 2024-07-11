function solve(token) {
    let tokenToResolve = token;
    const arrayToken = tokenToResolve.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    let secret = "";
    if ("answer" in tokenPayload) {
        secret = tokenPayload["answer"];
    }

    elif ("flag" in tokenPayload) {
        secret = tokenPayload["flag"];
    }

    return secret;
}
