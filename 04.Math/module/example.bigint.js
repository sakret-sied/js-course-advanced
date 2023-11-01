export default class ExampleBigInt {
  static execute() {
    const max = 2 ** 53 - 1;
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(max + 1);
    console.log(max + 2);
    console.log(max + 3);

    console.log(23123213123123123123123123123123n);
    console.log(BigInt(23123213123123123123123123123123));
    console.log(BigInt('23123213123123123123123123123123'));

    console.log(10n + 10n);
    console.log(10n + BigInt(10));
    console.log(10n * 10n);
    console.log(
      23123213123123123123123123123123n * 23123213123123123123123123123123n
    );

    console.log(10n < 20);
    console.log(10n == 10);
    console.log(10n === 10);
    console.log(10n === 10n);

    console.log(10n / 3n);
  }
}
