---
title: Functions
date: 2023-01-01
layout: default
description: Notes on topics that may be pertinent towards calculus.
tags: [math, review]
---

## Domain and Range

> **Domain:** the domain of a function, $f$, is the set of all valid inputs to $f$.

> **Range:** the range of a function, $f$, is the set of corresponding outputs to each value in the domain of $f$.

A function, $f$, relates each element from the domain (set of inputs) to an element from the range (set of outputs).

<center markdown="1">
$$f(D_f) = R_f$$
</center>

## Even and Odd Functions

> **Odd:** A function, $f$, is odd if $\forall x \in D_f$, $-f(x) = f(-x)$.

> **Even:** Likewise, a function, $f$, is even if $\forall x \in D_f$, $f(x) = f(-x)$.

### Properties of Even & Odd Functions

#### Odd
- Symmetric about the origin.
- If $f(x)$ is a polynomial, and $f(x)$ is odd:
	- All terms in $f(x)$ are raised to an odd degree
	- Unless $f(x) = 0$. $f(x)=0$ is a function that's both even and odd.
	- Proof:

<center markdown="1">

$f(x)$ (or any polynomial) can be generalized by the following summation, where $n$ is the degree of $f(x)$ :

$$f(x) = \sum_{i=0}^{n} a_ix^{i}$$

Assuming that the above statement is true, $\forall i$ such that $i \equiv 0 \mod (2)$, $a_i=0$, then:

$$f(-x) = \sum_{i=0}^{n} -a_ix^{i} = -\sum_{i=0}^{n} a_ix^{i} = -f(x) $$

</center>

#### Even
- Symmetric about the y-axis.
- If $f(x)$ is a polynomial, and $f(x)$ is even:
	- All term in $f(x)$ are raised to an even degree
- Proof: the statement can be proved in a similar fashion to the odd proof, which lies predominantly in restating $f(x)$ as a summation.

## Inverses
- **One to one**: if a function, $f$, yields a unique output per unique input, the function is said to be one to one. 
- If a function, $f$, has a graph that is strictly increasing/decreasing, it's a one to one function.
- If $f$ is a function with domain $D_f$ and range $R_f$, it's inverse, $f^{-1}$, has a domain of $R_f$ and a range of $D_f$.
- $f^{-1}(x)=y \leftrightarrow f(y)=x$
- $f$ is symmetric to $f^{-1}$ with respect to $y=x$

To find the inverse of a function, swap the $x$ and $y$ values.

## Combination of Functions

Given two functions, $f$ and $g$, that have the same domain $D$, these functions may be combined to yield their sum, difference, product, and quotient.
- **Sum:** $f(x)+g(x)$ = $(f+g)(x)$
- **Difference:** $f(x)-g(x)$ = $(f-g)(x)$
- **Product:** $f(g)g(x)$ = $(fg)(x)$
- **Quotient:** $\dfrac{f(x)}{g(x)}$ = $(\dfrac{f}{g})(x)$, granted that $g(x) \ne 0$

## Special Functions

- **Absolute Value Function:** $f(x) = \lvert x \rvert$
  - Defined as: $$f(x)$$=
    {\begin{array}{lr}x, & \text{if } x \geq 0 \\\  -x & \text{if } x \lt 0 \end{array}}
  - Returns the magnitude of $x$.
- **Greatest Integer:** $f(x)=\lfloor x \rfloor$.
  - Which returns the largest integer $N$, that satifies $N \leq x$.
- **Rational Functions:** $f(x)=\dfrac{g(x)}{h(x)}$, with $g(x)$ and $h(x)$ being polynomials.
  - $D_f = x \in \mathbb{R}, x \ne a$ where $h(a)=0$.
- **Trigonometric Functions:** Functions of angles, such as $sin(x)$, $cos(x)$, $tan(x)$, their reciprocals, and their hyperbolic counterparts.
  - Trigonometric functions are periodic (meaning that they repeat after an interval of time, $p$).
  - A function, $f(x)$, is periodic if, for all $x \in D_f$, there exists (at least) one value, $p$, such that $f(x+p) = f(x)$.
  - The smallest value, $p$, that adheres to the preceding rule, is known as the period of the function.
     - $sin(x)$, $cos(x)$, $csc(x)$ and $sec(x)$ all have periods of $2\pi$, whereas $tan(x)$ and $cot(x)$ have periods of $\pi$.
  - If $f(x)$ has an amplitude of $a$, and period of $p$, then $kf(bx)$ has an amplitude of $ka$ and period of $\dfrac{p}{b}$.
  - Amplitude is found by the equation: $\dfrac{a-b}{2}$ where $a$ is the maximum value of $f(x)$ and $b$ is the minimum value of $f(x)$.
  - To graph the inverse of a trigonometric function, it's domain must first be restricted such that the function is one to one.
- **Exponential/Logarithmic Functions:** 
  - Exponential: Functions of the form $ka^x$ for $a, k \in \mathbb{R}$, $a \geq 0$ and $a \ne 1$.
  - The function $f(x) = a^x$ has the domain: $D_f: x \in \mathbb{R}$ and range: $R_f: {y \in \mathbb{R}, y > 0}$.
  - Logarithmic: Functions of the form $k\log_a{x}$ for $a, k \in \mathbb{R}$, $a \geq 0$ and $a \ne 1$.
  - The function $f(x) = \log_{a}{x}$ has the domain: $D_f: x \in \mathbb{R}, x \ge 0$, and range: $R_f: {y \in \mathbb{R}}$a.
- **Polynomial Functions:** Functions that involve non-negative, integer powers and rational coefficients.
  - Polynomials can be written in the form: $f(x)=a_nx^n+a_{n-1}x^{n-1}+a_{n-2}x^{n-2}...a_1x+a_0$.
  - The degree of the polynomial, in this context, is $n$.
  - All polynomials can be written as a summation: $f(x) = \sum_{i=0}^{n}a_ix^i$, where $n$ is the degree of $f(x)$.

### (Basic) Exponential/Logarithmic Identities
- $a^0 = 1$, $a^1=a$, $a^na^m = a^{n+m}$, $a^na^{-m} = \dfrac{a^n}{a^m} = a^{n-m}$, $a^{m^n} = a^{mn}$
- $\log_{a}{1} = 0$, $\log_{a}{a} = 1$, $\log_{a}{a^n} = n$, $\log_{a}{n} + \log_{a}{m} = \log_{a}{nm}$, $\log_{a}{n}-\log_{a}{m}=\log_{a}{\dfrac{n}{m}}$, $n\log_{a}{m} = \log_{a}{m^n}$

## Parametrically Defined Functions

Parametrically defined functions are created when points $(x,y)$ are defined as functions of a third variable, most often $t$.

For example, $x=f(t)$, and $y=g(t)$ are parametrically defined functions with parameter, $t$. To graph a parametrically defined function on the Cartesian Plane, it's generally wise to devise a relationsihp between the functions of $x$ and $y$ (in this case, $f(t)$ and $g(t)$.)

**Ex:** Find the equation of $x=4sin(t)$ and $y=5cos(t)$ in terms of $x$ and $y$.

If $x = 4sin(t)$ and $y=5cos(t)$, then, $\dfrac{x}{4}$ = $sin(t)$ and $\dfrac{y}{5}$ = $cos(t)$. 

Therefore, $(\dfrac{x}{4})^2+(\dfrac{y}{5})^2$ = $sin^2(x)+cos^2(x)$ = 1.

The parametrically defined function, defined by $x=4sin(t)$ and $y=5cos(t)$ results in a graph of an ellipse.

### Using Parametrically Defined Functions to Create Inverses

If you have an initial parametrically defined function, defined as $x=f(t)$ and $y=g(t)$, the inverse of that function is equivalent to $x=g(t)$ and $y=f(t)$.

Any function can be defined parametrically.

## Polar Functions

Polar coordinates of the form $(r, \Theta)$ identify a point on the Cartesian Plane by specifying an angle $(\Theta)$, and the distance from the origin $(r)$.

To convert the set of polar coordinates $(r_n, \Theta_n)$, into a set of points on the Cartesian Plane:

$$ (x_n, y_n) $$ = $$ (cos(\Theta_n)*r_n, sin(\Theta_n)*r_n)$$ 

**Ex:** Consider the polar function $r=2+4sin(\Theta)$

a) For what value of $\Theta$ does the curve intersect the circle defined by $r=3$.

$$r=2+4sin(\Theta)$$ and $$r=3$$

$$3 = 2+4sin(\Theta)$$

$$sin(\Theta) = \dfrac{1}{4}$$

$$\Theta = sin^{-1}(\dfrac{1}{4})$$


