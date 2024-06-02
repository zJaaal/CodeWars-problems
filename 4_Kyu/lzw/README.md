In this kata you must implement the LZW algorithm according to [Wikipedia's specifications](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch).

Lempel–Ziv–Welch (LZW) is a universal lossless data compression algorithm.

Many current lossles compression implementations, such as `.zip` or `.gz`, are based on this algorithm.

The main advantage of this data compression is that is not necessary to transmit the data dictionary created during compression as it can be reconstructed in the decompression process.

Your job is to implement the compression and decompression algorithms explained in the [Wikipedia example](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch#Example). Consult it and the example test cases for details.

The tests verify that the implementation is efficient. You're not allowed to import other modules.