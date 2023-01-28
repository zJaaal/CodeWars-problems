function updateAccounts(accounts, logons) {
  let { Logons } = logons;
  let { Accounts } = accounts;

  Logons = Logons.sort(
    ({ Date: datex }, { Date: datey }) => datex.getTime() - datey.getTime()
  );
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
          LogonCount: foundAccount.LogonCount + 1,
        };
        Accounts = Accounts.map((a) =>
          a.Id == foundAccount.Id ? foundAccount : a
        );
      }
    });

  return Accounts.sort(({ Id: idx }, { Id: idy }) => idx - idy);
}

var logons = {
  Logons: [],
};
var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
    {
      Id: 12,
      Name: 'Frank Matthews',
      LogonCount: 1,
      LastLogon: new Date(2017, 1, 15, 14, 26, 31, 821),
    },
  ],
};

var expected = {
  Accounts: [
    {
      Id: 12,
      Name: 'Frank Matthews',
      LogonCount: 1,
      LastLogon: new Date(2017, 1, 15, 14, 26, 31, 821),
    },
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
assert(expected, updateAccounts(accounts, logons));

var logons = {
  Logons: [
    {
      Id: 21,
      Name: 'John F. Shepherd',
      Date: new Date(2017, 1, 24, 22, 13, 16, 241),
    },
  ],
};
var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
var expected = {
  Accounts: [
    {
      Id: 21,
      Name: 'John F. Shepherd',
      LogonCount: 14,
      LastLogon: new Date(2017, 1, 24, 22, 13, 16, 241),
    },
  ],
};
assert(expected, updateAccounts(accounts, logons));

var logons = {
  Logons: [
    {
      Id: 21,
      Name: '',
      Date: new Date(2017, 1, 24, 22, 13, 16, 241),
    },
  ],
};
var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
var expected = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 14,
      LastLogon: new Date(2017, 1, 24, 22, 13, 16, 241),
    },
  ],
};
assert(expected, updateAccounts(accounts, logons));

var logons = {
  Logons: [
    {
      Id: 21,
      Name: 'John F. Shepherd',
      Date: new Date(2016, 9, 23, 11, 13, 16, 541),
    },
  ],
};
var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
var expected = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 14,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
assert(expected, updateAccounts(accounts, logons));

var logons = {
  Logons: [
    {
      Id: 5,
      Name: 'Sarah Miller',
      Date: new Date(2017, 1, 23, 10, 12, 4, 545),
    },
    {
      Id: 5,
      Name: '',
      Date: new Date(2017, 1, 25, 10, 12, 4, 545),
    },
    {
      Id: 5,
      Name: 'Sarah Parker-Miller',
      Date: new Date(2017, 1, 24, 10, 12, 4, 545),
    },
  ],
};
var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
var expected = {
  Accounts: [
    {
      Id: 5,
      Name: 'Sarah Parker-Miller',
      LogonCount: 3,
      LastLogon: new Date(2017, 1, 25, 10, 12, 4, 545),
    },
    {
      Id: 21,
      Name: 'John Shepherd',
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
  ],
};
assert(expected, updateAccounts(accounts, logons));

function assert(e, a) {
  console.log('---------------------------------');
  console.log(e, a);
}
