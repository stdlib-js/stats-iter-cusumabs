<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# itercusumabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum of absolute values.

<section class="intro">

The cumulative sum of absolute values is defined as

<!-- <equation class="equation" label="eq:cumulative_sum_of_absolute_values" align="center" raw="\begin{align*} s_0 &= |x_0| \\ s_1 &= |x_1| + s_0 \\ s_2 &= |x_2| + s_1 \\ s_n &= |x_n| + s_{n-1} = |x_n| + \sum_{i=0}^{n-1} |x_i| \end{align*}" alt="Equation for the cumulative sum of absolute values."> -->

```math
\begin{align*} s_0 &= |x_0| \\ s_1 &= |x_1| + s_0 \\ s_2 &= |x_2| + s_1 \\ s_n &= |x_n| + s_{n-1} = |x_n| + \sum_{i=0}^{n-1} |x_i| \end{align*}
```

<!-- <div class="equation" align="center" data-raw-text="\begin{align*} s_0 &amp;= |x_0| \\ s_1 &amp;= |x_1| + s_0 \\ s_2 &amp;= |x_2| + s_1 \\ s_n &amp;= |x_n| + s_{n-1} = |x_n| + \sum_{i=0}^{n-1} |x_i| \end{align*}" data-equation="eq:cumulative_sum_of_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@50c466d332769c6933f483bfb62fc4f701a8297b/lib/node_modules/@stdlib/stats/iter/cusumabs/docs/img/equation_cumulative_sum_of_absolute_values.svg" alt="Equation for the cumulative sum of absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import itercusumabs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cusumabs@deno/mod.js';
```

#### itercusumabs( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative sum of absolute values.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercusumabs( arr );

var s = it.next().value;
// returns 2.0

s = it.next().value;
// returns 3.0

s = it.next().value;
// returns 6.0

s = it.next().value;
// returns 13.0

s = it.next().value;
// returns 18.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import runif from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@deno/mod.js';
import itercusumabs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cusumabs@deno/mod.js';

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative sum of absolute values:
var it = itercusumabs( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'sumabs: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/cumeanabs`][@stdlib/stats/iter/cumeanabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean of absolute values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/cusum`][@stdlib/stats/iter/cusum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum.</span>
-   <span class="package-name">[`@stdlib/stats-iter/sumabs`][@stdlib/stats/iter/sumabs]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values for all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cusumabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cusumabs

[test-image]: https://github.com/stdlib-js/stats-iter-cusumabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-cusumabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cusumabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cusumabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cusumabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cusumabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-cusumabs/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-iter-cusumabs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-iter-cusumabs/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-iter-cusumabs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-iter-cusumabs/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-iter-cusumabs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-iter-cusumabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cusumabs/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cumeanabs]: https://github.com/stdlib-js/stats-iter-cumeanabs/tree/deno

[@stdlib/stats/iter/cusum]: https://github.com/stdlib-js/stats-iter-cusum/tree/deno

[@stdlib/stats/iter/sumabs]: https://github.com/stdlib-js/stats-iter-sumabs/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
