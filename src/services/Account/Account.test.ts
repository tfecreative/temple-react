import { AccountService } from "services/Account";
import { mocked } from "ts-jest/utils";

jest.mock("services/Account", () => {
  return {
    AccountService: jest.fn().mockImplementation(() => {
      return {
        signIn: () => {
          return { token: "thisisatesttoken" };
        },
      };
    }),
  };
});

describe("accountService test", () => {
  const MockedAccountService = mocked(AccountService, true);

  beforeEach(() => {
    MockedAccountService.mockClear();
  });

  it("Check if sign in is called", () => {
    const accountService = new AccountService();
    const payload = { username: 'test', password: 'test' }
    const resp = accountService.signIn(payload);
    expect(resp).toEqual({token: 'thisisatesttoken'})
  });
});
