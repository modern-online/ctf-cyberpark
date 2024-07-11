function solve(token) {
    let tokenToResolve = token;
    const arrayToken = tokenToResolve.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    let secret = "";
    if ("answer" in tokenPayload) { // ch2
        secret = tokenPayload["answer"];
    }

    else if ("flag" in tokenPayload) { // ch4
        secret = tokenPayload["flag"];
    }

    else if ("message" in tokenPayload) { // ch4
        secret = tokenPayload["message"];
    }

    return secret;
}
