//https://www.codewars.com/kata/588d5898277e86e2ce000070

function updateAccounts(accounts, logons) {
    let { Logons } = logons;
    let { Accounts } = accounts;

    Logons = Logons.sort(({ Date: datex }, { Date: datey }) => datex.getTime() - datey.getTime());
    if (Logons.length)
        Logons.forEach((logon) => {
            let foundAccount = Accounts.find(({ Id: Aid }) => logon.Id == Aid);
            if (!foundAccount) {
                let newAccount = { ...logon, LogonCount: 1, LastLogon: logon.Date };
                delete newAccount.Date;

                Accounts.push(newAccount);
            } else {
                let older = logon.Date.getTime() > foundAccount.LastLogon.getTime();

                foundAccount = {
                    ...foundAccount,
                    LastLogon: older ? logon.Date : foundAccount.LastLogon,
                    Name: older && logon.Name.length ? logon.Name : foundAccount.Name,
                    LogonCount: foundAccount.LogonCount + 1
                };
                Accounts = Accounts.map((a) => (a.Id == foundAccount.Id ? foundAccount : a));
            }
        });

    return Accounts.sort(({ Id: idx }, { Id: idy }) => idx - idy);
}
