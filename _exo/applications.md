---
title: Real World Applications
date: 2022-01-02
layout: default
description: List of applications for a variety of topics taught in MCR3U6.
tags: 
---

## Algebraic Expressions: Computer Algebra Systems and Representing Algebraic Equations using Matrices

Algebraic expressions, particularly linear algebraic expressions, are relatively simple and have an abundance of real-life scientific applications. They're used in our phones, our computers, and even many scientific calculators. Although, do you ever wonder how calculates are able to solve systems of equations, or differentiate and integrate? It's all thanks to computer algebra systems, and their representations of algebraic expressions using linear algebra.

Computer Algebra Systems are mathematical systems that possess the ability to manipulate and solve mathematical expressions, serving as the brute force, computational servants to mathematicians and scientists. The most prominent, and well-developed Computer Algebra Systems employ symbolic computation, the paradigm of computation where values are represented by their exact form, which provides higher accuracy over numeric computation, where values are represented by floating-point approximations (For example: $$\sqrt{2}$$ vs $$1.4142$$, or $$\dfrac{3}{5}$$ vs $$0.6$$).

General purpose Computer Algebra Systems require a certain amount of complexity and functionality in order to contribute towards the work of a broad range of individuals from a variety of mathematical and scientific fields. The features that determine a well-developed Computer Algebra System include, but are not limited to:
- A inherent library of mathematical algorithms and operations
- A library of mathematical rules, such as the Chain Rule (Differentiation) or Integration By Parts (Integration).
- A simplifier:
	- The expansion, simplification, and evaluation of mathematical equations of different types (polynomial functions, rational functions, and more)
	- This, in itself, causes the Computer Algebra System to be extremely complex, as parsing trees, garbage collectors, and many more other features must be implemented.
	- This in itself, requires an extreme amounts of 
- Accurate, and (sometimes) symbolic computational results

From an early stage, Computer Algebra Systems were built to aid in the computation of brute forced equations, allowing scientists to pursue research at a higher, and more efficient level. Computer Algebra Systems were a testament to the computational benefits of computers over humans, and the benefits of computers if they were optimized for a sole project. The first Computer Algebra System, Schoonschip, developed by Martinus J.G Veltman, was conceived as a method of further progressing his research in the field of particle physics. Since then, a variety of specialized Computer Algebra Systems have been created to aid in many different mathematical and scientific fields, such as graph theory, combinatorics, probability, string theory, and more. There has been software created to run on supercomputers, or even the microchips within everyday scientific calculators. 

<div style="float: right" markdown="1">
<img style="width: 30em;" src="/src/pix/applications/cas.png" alt="solve"/>
</div>

Matrices introduce a new method of manipulating and representing algebraic expressions, a method that allow computers to solve for system of equations without inefficient brute force methods. This allows for computers to solve complex, multi-variable systems in matters of milliseconds. An effective application of solving linear system of equations within the field of mathematics is Polynomial Interpolation, in which, the linear system of equations aims to solve for the value of each coefficient.

Given a matrix, $$M$$, the inverse of that matrix $$M^{-1}$$, is the matrix for which $$M*M^{-1} = I$$, where $$I$$ is the corresponding identity matrix. The idea of the inverse of a matrix is similar to that of the reciprocal on the field of real numbers, as the identity matrix is the matrix equivalent to 1.

Matrix multiplication uses the dot product of row and column vectors to compute values. A vector is a N-tuple, which is a set of N elements, most often on the real field. The dot product of two vectors of the same size, $$\vec{u}$$ and $$\vec{v}$$ may be computed as $$\sum_{k=1}^{N}\vec{v}_k\vec{u}_k$$, where $$\vec{v}_i$$ is the $$i$$th element in $$v$$. For example, the dot product of $$\langle 1, 2, 3 \rangle$$ and $$\langle 4,5,6 \rangle$$ is $$(1*4)+(2*5)+(3*6) = 32$$.

**Notation:** If $$M$$ is a matrix. $$M_i$$ is the $$i$$th row in $$M$$, and $$M_{i,k}$$ is the element of $$M$$ in the $$i$$th row and $$k$$th column.

Let $$M$$ and $$N$$ be two matrices. Furthermore, let $$Q = M * N$$. Each element, $$Q_{i,k}$$ is produced by the dot product between the vectors in the $$i$$th row in $$M$$ and the $$k$$th column in $$N$$. Therefore, for the two vectors to be the same size, the number of columns in $$M$$ must be equal to the number of rows in $$N$$.

For example, computing $$\begin{bmatrix} a_1 & a_2 & a_3 \\ a_4 & a_5 & a_6 \end{bmatrix} * \begin{bmatrix} b_1 & b_2 \\ b_3 & b_4 \\ b_5 & b_6 \end{bmatrix}$$ returns $$ \begin{bmatrix} (a_1 * b_1 + a_2 * b_3 + a_3 * b_5) & (a_1 * b_2 + a_2 * b_4 + a_3 * b_6)\\ (a_4 * b_1 + a_5 * b_3 + a_6 * b_5) & (a_4 * b_2 + a_5 * b_4 + a_6 * b_6) \end{bmatrix}$$.

Using linear algebra notation, system of equations such as

$$2x + y + z = 7$$

$$2x - y + 2z = 6$$

$$x-2y+z = 0$$ 

are equivalent to

$$\begin{bmatrix} 2 & 1 & 1 \\ 2 & -1 & 2 \\ 1 & -2 & 1 \end{bmatrix} * \begin{bmatrix} x \\ y \\ z \end{bmatrix} =  \begin{bmatrix} 7\\6\\0 \end{bmatrix} $$

As mentioned above, the linear algebra equivalent of a reciprocal is the inverse of a matrix. Just as how in the scalar equation $$MN = A$$, to isolate $$N$$, one can multiply by the reciprocal of $$M$$ ($$\dfrac{1}{M}$$), matrix arithmetic allows for the isolation of a variable and removal of a matrix ($$M$$) by multiplying by it's inverse ($$M^{-1}$$). Multiplying a matrix by it's inverse returns the identity matrix, $$I$$, which, when multiplied with any vector, returns the vector itself.

Therefore, in the equation above, to isolate $$\begin{bmatrix} x\\y\\z \end{bmatrix}$$, one can multiply by $$\begin{bmatrix}2&1&1\\2&-1&2\\1&-2&1\end{bmatrix}^{-1}$$. This is far superior to the algebraic representation of system of equations, as the inverse of a matrix may be calculated by a simple algorithm.

<details markdown="1">
<summary><b>For more information about inverting matrices, click here.</b></summary>

For example, $I_2$ = $$\begin{bmatrix}1&0\\0&1\end{bmatrix}$$, $I_3$ = $$\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$, and $I_n$ = $$\begin{bmatrix}1&0&0&...&0\\0&1&0&...&0\\0&0&1&...&0\\ \vdots&\vdots&\vdots&\ddots&\vdots\\0&0&0&...&1\end{bmatrix}$$.

Therefore, to isolate $$\begin{bmatrix} x\\y\\z \end{bmatrix}$$ in the equation above, we multiply both sides by $$\begin{bmatrix}2&1&1\\2&-1&2\\1&-2&1 \end{bmatrix}^{-1}$$ giving us: 

$$
I_3 * \begin{bmatrix} x\\y\\z \end{bmatrix} 
=
\begin{bmatrix}2&1&1\\2&-1&2\\1&-2&1 \end{bmatrix}^{-1} * \begin{bmatrix}7\\6\\0\end{bmatrix}
$$

There exists a variety of methods to inverse an $N\text{x}N$ matrix, such as Gauss-Jordan elimination (which introduces Reduced Row-Echelon Form (RREF)), Gaussian elimination, and more.

The Gauss-Jordan elimination requires an $N\text{x}N$ matrix to be reduced into Reduced Row-Echelon Form, which, for an $N\text{x}N$ square matrix, is always the identity matrix $I_n$. Let $M$ be the $N\text{x}N$ matrix we want to find the inverse of. The Gauss-Jordan elimination method requires the same operations to be simultaneously on $M$ and identity matrix, $I_n$. Furthermore, the Gauss-Jordan elimination method requires scalar operations to be performed on individual rows in $M$ until $M$ is the identity matrix, $I_n$. 

**For example:** Let $M$ be the $2\text{x}2$ matrix, $$\begin{bmatrix}-2&2\\4&-3 \end{bmatrix}$$, find $M^{-1}$.

The identity matrix, corresponding to $M$ is $$I_2 = \begin{bmatrix}1&0\\0&1\end{bmatrix}$$. 

Steps (generalized for matrix $M$ with dimensions $N\text{x}N$.
- For each row, $r$ from $0$ to $N$, normalize the row using the value at $M_{r, r}$, multiplying the entire row by $\dfrac{1}{M_{r, r}}$.
  - An edge case occurs when the value at $M_{r, r} = 0$. If this occurs, rows are swapped until $M_{r, r} \ne 0$, and $M^{-1}$ can be found.
- After normalizing the row, $r$, every row, $k$ such that $k \ne r$, is subtracted by the vector $M_r * M_{k, r}$.
- Apply the same operations to the original $N\text{x}N$ identity matrix.

**Step 1:** Normalize (ROW 1)

<center markdown="1">
$$ 
\begin{bmatrix}
-2&2\\4&-3
\end{bmatrix}
\begin{bmatrix}
1&0\\0&1
\end{bmatrix} 
$$

$$
= \begin{bmatrix}
1&-1\\4&-3
\end{bmatrix}
\begin{bmatrix}
\dfrac{-1}{2}&0\\0&1
\end{bmatrix}
$$
</center>

**Step 2:** Subtract (ROW 1 from rest):

$$
\begin{bmatrix}
1&-1\\(4-(1 * 4)&-3-(-1 * 4)
\end{bmatrix}
\begin{bmatrix}
\dfrac{-1}{2}&0\\0-(\dfrac{-1}{2} * 4)&1-(0 * 4)
\end{bmatrix}
$$

$$
= \begin{bmatrix}
1&-1\\0&1
\end{bmatrix}

\begin{bmatrix}
\dfrac{-1}{2}&0\\2&1
\end{bmatrix}
$$

**Step 3:** Subtract (ROW 2 from rest):

$$\begin{bmatrix}
1-(0 * -1)&-1-(1 * -1)\\0&1
\end{bmatrix}
\begin{bmatrix}
\dfrac{-1}{2}-(2 * -1)&0-(1 * -1)\\2&1
\end{bmatrix}
$$

$$ = \begin{bmatrix}
1&0\\0&1
\end{bmatrix}
\begin{bmatrix}
\dfrac{3}{2}&1\\2&1
\end{bmatrix}
$$

**Checking:**

$$\displaylines{\begin{bmatrix}
\dfrac{3}{2}&1\\2&1
\end{bmatrix} * 
\begin{bmatrix}
-2&2\\4&-3
\end{bmatrix}
\\ = \begin{bmatrix}
(\dfrac{3}{2} * -2 + 4 * 1)&(\dfrac{3}{2} * 2 + 1 * -3)\\
(2 * -2 + 1 * 4)&(2 * 2 + 1 * -3 )\\
\end{bmatrix}
\\
= \begin{bmatrix}
1&0\\0&1
\end{bmatrix}}
$$

Therefore, the value of $$\begin{bmatrix}-2&2\\4&-3\end{bmatrix}^{-1} = \begin{bmatrix}\dfrac{3}{2}&1\\2&1\end{bmatrix}$$. This also means that the solution to the system of equations: $$-2x + 2y = N $$ and $$4x-3y=M$$ is $$x = \dfrac{3}{2}N+M$$ and $$y=2N+M$$ for any $N, M \in \mathbb{R}$.


Using these algorithms, based upon the basic manipulation of algebraic expressions, computer programs are able to solve incredibly complex system of equations in matters of milliseconds. When it comes to most computation, computers are far superior than humans, who often may require pages of work to solve a 5+ equation system of equations. Ultimately, that's the ideal. We, as humans, have the capabilities to think, to have original ideas, and with computational systems such as computer algebra systems, these unique and innovative thoughts aren't bogged down by endless sidetracking and manual computation.

**For example:** Given the system of equations 

$$ 2a + 2b - c + d = 4 $$ 

$$ 4a + 3b - c + 2d = 6 $$

$$ 8a + 5b - 3c + 4d = 12 $$

$$ 3a + 3b - 2c + 2d = 6 $$

Find the tuple $$(a,b,c,d)$$.

<center> <img style="width: 40em; object-fit: cover" src="/src/pix/applications/4soe.jpg" alt="solve"/></center>

Although, the preceding system of equations is relatively simple, it requires a lot of mathematical manipulation and computation, taking at least half a page of work. Alternatively, CAS uses higher level mathematics that are based on simple fundamental ideas to solve the system of equations. 
</details>

Within the broader field of applied linear algebra, computational algorithms that solve system of equations are beyond necessary, as they can be applied towards devising efficient and accurate computer algorithms that attempt to approximate many problems within continuous mathematics. Furthermore, some non-linear systems may be approximated using linear equations, such as during tangent-line approximation, which can be used to approximate many phenomena such as pendulums, control theory within robotics (which is often incredibly non-linear, but can be modeled by linear equations), and can approximate relatively simple, but time-consuming equations, such as $$1.999^4$$. Furthermore, the representation of algebraic expressions using matrices play significant roles within fields such as engineering, physics, and computer science. Within computer science, and more specifically, computer graphics, linear algebra is used to project 3D images onto 2D screens, using methods such as orthogonal projection. Furthermore, matrices may be created to employ transformations onto sets of points, that cause rotations (using rotation matrices), shearing (deformation of an object), and much more. In essence, a benefit of matrices and vectors over more thorough and spelt out algebraic expressions is the fact that they may be easily represented within computer systems.

**Fun Fact:** I'm actually building my own Computer Algebra System called *Morpheus*, starting with a simple linear algebra library. Hopefully, that means I won't have to do much math homework in university.

## Rational Expressions: Polynomial Interpolation and Applications in Cryptography

Imagine for a second, hypothetically of course, that there's a safe that contains valuable treasure, stored on an island in the middle of nowhere, marked by a large red X. Image you'd made an agreement to share the safe with your $$N$$ friends, everyone with their own niche share of the treasure. Inside the safe, there's gold and rubies, all sorts of non-depreciating valuable objects, a nice and hefty investment. Maybe, just maybe, it wouldn't be so wise to give everyone the password to the safe, on the off chance you have a row with a friend, and they suddenly want to enact revenge. Collectively, you agree that it's also extremely unwise to give everyone $$\dfrac{1}{N+1}$$ part of the password, a part for every person. What if someone loses their share? Or what if someone loses their phone? With the busy lives everyone leads, it's practically impossible to arrange a meetup so perfect, twice. Together, you and your $$N$$ friends come to the agreement that everyone should possess a share of the password, but it shouldn't take all $$N+1$$ people to open the safe, only some majority, $$M$$. Well, how would that work? Simple, polynomial interpolation.

Here's how polynomial interpolation works. Given a data set of $$N$$ points $$\{(x_1, y_1), (x_2, y_2), ..., (x_n, y_n)\}$$, a unique polynomial, $$P(x)$$, of degree at most $$N-1$$ may be interpolated. If the degree of $$P(x)$$ is $$i$$, and $$0 \lt i \lt N$$, and $$P(x_i) = y_i, \forall i \in \{1,2,...,n\}$$, $$P(x)$$ is unique. There exists an infinite amount of polynomials of degree $$\geq N$$ will satisfy $$P(x_i) = y_i$$ $$\forall i \in \{1,2,3,...,n\}$$.

For example, given the set of data points $$\{(1,2), (3,6)\}$$, there exists an arbitrarily large amount of quadratic equations, $$P(x)$$, that may be interpolated to satisfy $$P(1) = 2$$ and $$P(3) = 6$$, but there exists only one linear equation that can be interpolated from the set of points $$f(x) = 2x$$.

If $$P(x)$$ is a quadratic, $$P(x)$$ is of the form $$ax^2 + bx + c$$. We can then solve the interpolation as a system of equations. Since $$P(1) = 2$$ and $$P(2) = 6$$, then:

$$P(1) = a(1)^2 + b(1) + c = a + b + c = 2$$

$$P(2) = a(2)^2 + b(2) + c = 4a + 2b + c = 6$$

$$\therefore 3a+b=4$$

$$\because a+b+c=2$$ $$b=4-3a$$, then:

$$a+(4-3a)+c=2$$

$$c = 2(a-1)$$

Therefore, choosing any $$a$$ for $$a \in \mathbb{R}$$, and choosing any $$b$$ and $$c$$ that satisfy $$b=4-3a$$ and $$c=2(a-1)$$, the quadratic $$P(x) = ax^2+bx+c$$ will pass through the data set of given points.

This concept of polynomial interpolation is the conceptual backbone of Shamir's Secret Sharing (SSS), an widely implemented algorithm within cryptography and cryptocurrency. Assume you have $N$ friends/business partners ($N+1$ total people), each separate individual is given a valid point on the $k-1$th degree polynomial $P(x)$. Therefore, to reconstruct the polynomial from the data set of given points, the minimum number of points required is $k$, also known as the threshold. The secret may be represented within the polynomial, perhaps, as the constant of the polynomial (in that case, $$(0, f(0))$$ should not be given as a data point), or perhaps, the sum of coefficients (in the case, $$(1, f(1))$$ should not be given as a data point).

Most often, the secret is given as the constant of the polynomial, and the polynomial must have coefficients that are natural numbers.

The benefits of SSS include:
- Minimalism: Each share is a tuple containing $$(x, f(x))$$, which allows for a minimalistic and efficient manner of generating shares.
- Flexibility: Every couple of months/years, new polynomials can be reconstructed with the same secret as the original (constant stays the same, or sum of coefficients stay the same), and new shares may be distributed. This also allows for the addition/deletion of shares and individuals.
- Most importantly, security: given any set of points under the threshold, it's computationally impossible to reconstruct the polynomial.

To increase the security of SSS, rather than computing points of the polynomial using integer arithmetic, SSS uses finite field arithmetic. There exists an inherent problem with integer arithmetic, that allows someone with enough data points to estimate the range of the password.

### The Problem with Integer Arithmetic

With the insightful information that the secret polynomial, $P(x)$ is of degree $n$, and contains only natural number coefficients, a brute force method may be taken towards cracking the constant of $P(x)$, $P(0)$, if provided with $n$ points ($n+1$ is the threshold). This is done by restricting the domain of possibilities of the constant, using the property that the coefficients must be natural numbers.

$P(x)$ is of the form: $$\displaystyle{\sum_{i=0}^{n}a_ix^i}$$ such that $$a_i \in \mathbb{N}$$, and $n$ is the degree of $P(x)$.

Let $$P(x) = 14x^3 + 32x^2 + 58x + 1901$$, and assume the set of data points $$\{(1, 2005), (2, 2257), (3, 2741), (4, 3541), (7, 8677), (10, 19681)\}$$ are provided as shares amongst 6 people. To recover the original polynomial, at least 4 shares must be present, or do they?

How difficult is it to brute force the secret using 3 shares, given the knowledge that each coefficient must be a positive integer? Given three shares, such as $$\{(1,2005), (2,2257), (3,2741)\}$$, it's possible to build a relationship between variables, in order to coerce all possible values of the constant.

To start, each individual with a share knows the degree of the polynomial, which, in this case, is 3. Therefore, $P(x)$ must take the form $$ax^3+bx^2+cx+d$$. Plugging in the three shares gives us the system of equations

$$ P(1) = a(1)^3+b(1)^2+c(1)+d = a + b + c + d = 2005$$

$$ P(2) = a(2)^3+b(2)^2+c(2)+d = 8a + 4b + 2c + d = 2257$$

$$ P(3) = a(3)^3+b(3)^2+c(3)+d = 27a + 9b + 3c + d = 2741$$

$$ P(3) - P(2) = 19a + 5b + c = 484 $$

$$ P(2) - P(1) = 7a + 3b + c = 252 $$

$$ (P(3)-P(2))-(P(2)-P(1)) = 12a + 2b = 232 $$

$$ 6a + b = 116 $$

$$ b = (116-6a) $$

$$ c = 252 - (3b + 7a)$$

$$ = 252 - (348 - 11a) $$

$$ = -96 + 11a $$

$$ d = 2005 - (a + b + c) $$

$$ = 2005 - (a + (116-6a) + (-96+11a)) $$

$$ = 2005 - (6a + 20) $$

$$ = 1985 - 6a $$

Therefore, the tuple $$(a,b,c,d)$$ is equivalent to $$(a, 116-6a, -96+11a, 1985-6a)$$. To fit the constraints that $$a,b,c,d \in \mathbb{N}$$, $$9 \leq a \leq 19$$, as for any $$a \lt 9$$, $c \lt 0$, and for any $$a \gt 19$$, $b \lt 0$, meaning that there exists only 11 possible values of $d$ (the secret). All possible tuples that fit the constraints $(a,b,c,d)$ can be found [here](/src/txt/sss_secret.txt). Not so secure...

### Finite Field Solutions

Finite fields are fields (sets where mathematical operations are defined) that contain a finite number of elements. To restrict the polynomial, $P(x)$, to a finite field ($$GF(p)$$), for some prime $$p$$ such that $$p \gt n, p \gt P(0)$$ (where $n$ is the degree of $P(x)$) and $$p \gt a_i$$ where $$a$$ are the coefficients of $$P(x)$$. 

Therefore, each share must be calculated as $$(x, f(x) \pmod{p})$$ as oppossed to $$(x, f(x)).$$ Although each user is informed of the value of $$p$$, given a high enough value, it's computationally impossible to brute force $P(0)$.

Returning to the previous example, let $$P(x) = 14x^3+32x^2+58x+1901 \pmod{p}$$, and let $$p=1913.$$ The polynomial, $P(x)$, may also be represented as $$P(x) = 14x^3+32x^2+58x+1901-(1913m_i)$$, for some $m_i \in \mathbb{W}$. This returns the set of shares: $$\{(1, 92), (2,344), (3, 828), (4, 1628), (7, 1025), (10, 551)\}$$. Once again, assume that an individual gets their hands on 3 shares $$\{(1,92), (2,344), (3,828)\}$$, plugging each value into the $P(x)$ returns.

$$P(1) = a(1)^3+b(1)^2+c(1)+d-1931m_1 = a + b + c + d - 1931m_1 = 92$$

$$P(2) = a(2)^3+b(2)^2+c(2)+d-1931m_2 = 8a + 4b + 2c + d - 1931m_2 = 344 $$

$$P(3) = a(3)^3+b(3)^2+c(3)+d-1931m_3 = 27a + 9b + 3c + d - 1931m_3 = 828$$

$$P(3) - P(2) = 19a + 5b + c - 1931(m_3-m_2) = 484  $$

$$P(2) - P(1) = 7a + 3b + c - 1931(m_2-m_1) = 252 $$

$$(P(3)-P(2))-(P(2)-P(1)) = 12a + 2b - 1931((m_3-m_2)-(m_2-m_1)) = 232$$ 

$$ 12a + 2b = 232 + 1931((m_3-m_2)-(m_2-m_1)) $$

There exists too many unknowns ($$m_1, m_2, m_3, a, b$$), even with the restriction that $$a,b,m_1,m_2.m_3 \in \mathbb{N}.$$

### Interpolating using Lagrange Polynomials

<div style="float: right" markdown="1">
<img style="width:30em; object-fit: cover; padding: 1em;" src="/src/pix/applications/lagrange-desmos-cropped.png" alt="Camera Lens"/>
</div>

The Lagrange Interpolating Polynomial, $$L(x)$$ is the unique polynomial of the lowest degree, that interpolates a set of $$k+1$$ coordinate pairs $$(x_j, y_j)$$, for $$0 \leq j \leq k$$. $$L(x)$$ has a degree $$\leq k$$, and satisfies $$L(x_j) = y_j$$. 

Each node within the data set $$\{x_0, x_1, x_2,..., x_k\}$$ must be distinct, meaning that $$x_j \ne x_m$$ for $$j \ne m$$. Furthermore, there exists a unique Lagrange Basis, $l_j(x)$, for each $x_j$ which is a polynomial of degree $$\leq k$$, such that $$l_j(x_m) = 0 $$ and $$l_j(x_j) = 1$$, $m \ne j$.

The Lagrange Basis is defined as:

$$l_j(x) = \dfrac{(x-x_0)}{(x_j-x_0)}\dfrac{(x-x_1)}{(x_j-x_1)}...\dfrac{(x-x_{j-1})}{(x_j-x_{j-1})}\dfrac{(x-x_{j+1})}{(x_j-x_{j+1})}...\dfrac{(x-x_k)}{(x_j-x_k)}$$

For any $$x_i$$, such that $$i \ne j$$, $$l_j(x_i) = 0$$ meaning that $$x_i$$ is a root of $$l_j(x)$$. 

$$l_j(x_j) = \dfrac{(x_j-x_0)}{(x_j-x_0)}\dfrac{(x_j-x_1)}{(x_j-x_1)}...\dfrac{(x_j-x_{j-1})}{(x_j-x_{j-1})}\dfrac{(x_j-x_{j+1})}{(x_j-x_{j+1})}...\dfrac{(x_j-x_k)}{(x_j-x_k)}$$

$$ = 1*1*1...*1*1 = 1 $$

The Lagrange Polynomial is simply the sum of all the Lagrange Basis Polynomials multiplied by their respective $$y_j$$ values:

$$L(x) = (y_0)(l_0(x))+(y_1)(l_1(x))+...+(y_{k-1})(l_{k-1}(x))+(y_k)(l_k(x)) $$

Plugging any value $$x_j$$ into $$L(x)$$ returns:

$$L(x_j) = (y_0)(l_0(x_j))+(y_1)(l_1(x_j))+...+(y_{k-1})(l_{k-1}(x_j))+(y_k)(l_k(x_j)) $$

$$ = (y_0)(l_0(x_j))+(y_1)(l_1(x_j))+...(y_{j})(l_j(x_j))+...+(y_{k-1})(l_{k-1}(x_j))+(y_k)(l_k(x_j)) $$

$$ = (y_0)(0) + (y_1)(0) + ... (y_j)(1) + (y_{k-1})(0) + (y_k)(0) $$

$$ = y_j $$

Therefore, $$L(x_j) = y_j$$, $$ \forall j$$ such that $$ 0 \leq j \leq k$$.

Example. Let the to-be interpolated function be $$f(x) = x^3$$, and the data set of coordinate points be $$\{(1, 1), (2, 8), (3, 27), (4, 64)\}$$.

<div markdown="1">
The Lagrange Basis Polynomial for all $x_j$:
- $$x_0$$: $$l_0(x) = \dfrac{(x-x_1)}{(x_0-x_1)}\dfrac{(x-x_2)}{(x_0-x_2)}\dfrac{(x-x_3)}{(x_0-x_3)}$$ <br><br>
- $$x_1$$: $$l_1(x) = \dfrac{(x-x_0)}{(x_1-x_0)}\dfrac{(x-x_2)}{(x_1-x_2)}\dfrac{(x-x_3)}{(x_1-x_3)}$$ <br><br> 
- $$x_2$$: $$l_2(x) = \dfrac{(x-x_0)}{(x_2-x_0)}\dfrac{(x-x_1)}{(x_2-x_1)}\dfrac{(x-x_3)}{(x_2-x_3)}$$ <br><br>
- $$x_3$$: $$l_3(x) = \dfrac{(x-x_0)}{(x_3-x_0)}\dfrac{(x-x_1)}{(x_3-x_1)}\dfrac{(x-x_2)}{(x_3-x_2)}$$ <br>
</div>

<br>
<br>
$$L(x) = (1)(l_0) + (8)(l_1) + (27)(l_2) + (64)(l_3) = x^3 $$. ([Proof of work here](/src/pix/applications/lagrange-ex.jpeg)).


## Logarithmic Functions: Divide and Conquer Algorithms.

Imagine, for a brief moment, that it's the 20th century. The internet is a niche, nerdy haven, expertly navigated by a few, experienced users. There existed only a couple of forums, each with approximately 5 people, maximum. Rotary phones were going out of style, and were beginning to be replaced by landlines. Excitedly following the wave of new technologies, you've managed to install your first landline, and hope to contact some of your friends. Picking up the telephone book, you search for their name, only to be discouraged by the tens of thousands of names that populate the pages.

You think to yourself: "*What could possibly be the most efficient way of finding my friends name in this sea of alphabetized names?*". 

How about dividing and conquering? Divide and conquer algorithms break down problems into subproblems of the same type, until the subproblems are simple enough to solve.

Imagine that the amount of entries in the phone book is some arbitrarily large number, say $$300000$$. Furthermore, imagine that the name you're trying to find is "Jack Jones".

The searching divide and conquer algorithm states that, given the fact that the book is alphabetized, it's possible to narrow the search down to a definite range, by splitting the problem into multiple subproblems. For example, while looking for the name "Jack", you flip to the middle of the phone book, where the section is filled with names starting with "N". Since the phone book is alphabetized, you know the section with Jack's name is in the first half the book, thus narrowing down the search to $$150000$$ names.

By repeating this process, you would slowly be able to cut down the search volume by 2 times every single time. For example, after narrowing the search down to $$150000$$ names, you flip to the page that's a quarter into the phone book, where the section is filled with names starting with "D". Therefore, from this information, you know that Jack's name is between the quarter and half mark of the phone book. That's only $$75000$$ more names to search! 

By cutting down the volume of searches by 2 every time, one can quickly deduce that the **maximum** number of steps required to find the name "Jack Jones" is actually logarithmic. The maximum number of steps represents the case where "Jack Jones" is actually on the last page that is narrowed down by the algorithm. To be more precise, the amount of operations required to find "Jack Jones" in a phone book with $$300000$$ names, assuming that there are the same amount of names on each page, is $$\log_2 300000 = 18.2$$. Obviously, you can't have $$\dfrac{1}{5}$$ of a step, so it rounds up to 19 steps, maximum. That's significantly better than searching hundreds of pages, allowing you to spend more time talking to your friends.

The algorithm that has just been described is known as the binary search algorithm, which works in logarithmic time complexity. The time complexity of an algorithm is the performance of the algorithm in the worst-case, which is described as a function of the size of the input. For example, an algorithm such as binary search, that has a time complexity of $$log_2 n$$, represents a function that, in a worst case scenario with an input of size $$n$$, runs in $$log_2 n$$ time. Time complexity refers to worse case scenario, as there exists many instances where an algorithm may terminate after a singular step. Coming back to the example of the phone book, imagine if the name "Jack Jones" appears precisely in the middle of the phone book. It wouldn't be fair to say that the algorithm runs in a time complexity of 1.

In computer science, a logarithmic time complexity for an algorithm is often considered ideal. The most efficient algorithms work to handle large sets of data, the ideal situation is for the run time to remain relatively consistent, even if the size of the input increases. For example, imagine another scenario where you attempt to find "Jack Jones" by iterating through every... single... name. Obviously, the time complexity for this iterating algorithm is $$n$$. If the phone book were to increase to contain, say, $$600000$$ names,  how many more steps of each algorithm would need to be peformed in the worst case scenario? Well, for the iterating algorithm, you would require $$600000-300000=300000$$ more steps. Although, for the divide and conquer algorithm, after a singular step, the search size would be reduced to $$300000$$ names, which is equivalent to the previous scenario.

Mathematically, the logarithm function grows slower than any polynomial function, while the exponential function grows faster than any polynomial function. If you'd like a proof of this statement, simply prove that $$\lim_{x \to \infty} \dfrac{log_n x}{P(x)} = 0$$ for $$n \gt 1$$. Hint: You may need to use l'Hospitals Rule for the indeterminate form $$\dfrac{\infty}{\infty}.

Although, divide and conquer algorithms aren't used solely for finding a name in a phone book. Many fast and efficient algorithms have been devised to run in logarithmic time. There are divide and conquer algorithms for sorting, such as merge sort, where a set of $$n$$ values are divided into sets of $$\dfrac{n}{2}$$ numbers, sorted individually and then merged together. Using algorithms, simple mathematical operations, such as multiplication may be optimized using algorithms such as Karatsuba's multiplication algorithm, or the Strassen algorithm for matrix multiplication.

Often, when devising algorithms, computer scientists will attempt to implement a divide and conquer approach, attempting to implement a logarithmic time complexity, over some polynomial time complexity such as $$n$$ or $$n^2$$ time.

These complex algorithms may seem relatively redundant at first. After all, who cares about such miniscule amount of efficiency? One may not notice the benefits of optimization until they are gone. After all, mathematical operations such as addition, multiplication, and computational algorithms such as sorting or searching, are performed millions of times a day, unbeknownst to the general population. These algorithms bring us YouTube videos, web browsing, music, in matters of milliseconds. Often times, ideas are simple to implement and design, but it's the optimization that differentiates a good piece of software to a usable piece of software.

## Trigonometric Ratios: Optics, Refraction, and Cameras

In physics, refraction is the redirection of a wave as it passes from one medium to another. Although light is the most observable refractive wave, studied in the field of optics, both sound and water waves are also subject to refraction. The study of light refraction has many applications within the formation of images using lenses, which has led to it being a foundational building block to one of the most revolutionary inventions of all time, the camera.

An optical medium is a medium in which light is able to propagate. Every optical medium has a respective refractive index, which denotes the speed of light within that specific medium, in comparison to the speed of light in a vacuum. For example, water, which is an optical medium, has a refractive index of $$1.33$$, meaning that light in water travels 1.33 times slower than light in a vacuum. Fun fact, that refractive index of air is $$1.0003$$, meaning that the speed of light through air is **slightly** slower than the speed of light in a vacuum. 

Light refraction follows Snell's law, which states, that given two optical mediums, with refractive indices of $$n_1$$ and $$n_2$$ respectively, the angle of incidence from the first medium ($$\theta_1$$) to the other medium ($$\theta_2$$), is:

<center markdown="1">
$$\dfrac{sin(\theta_1)}{sin(\theta_2)} = \dfrac{n_2}{n_1}$$ or $$n_1sin(\theta_1) = n_2sin(\theta_2)$$
</center>

In optics, the point of incidence is the point where the light ray hits the surface of the medium. The angle of incidence is the angle between the light ray, and the line perpendicular to the surface of the medium at the point of incidence. Using Snell's Law, scientists, or just people who know trigonometry, are able to predict the path of light rays as they travel through multiple mediums and lenses.

<center style="display: flex; justify-content: center">
<img style="width:40em; object-fit: cover; padding: 1em;" src="/src/pix/applications/camera-lens.jpg" alt="Camera Lens"/>
<img style="width:40em; object-fit: cover; padding: 1em;" src="/src/pix/applications/refraction.GIF" alt="Refraction"/>
</center>

A camera is often made up of multiple lenses working together. Within most cameras, there exists a complex mechanism designed for the sole purpose of causing light to converge within a singular spot. This spot often contains a mechanism, such as a film or a digital sensor, that works to produce the image using the amount of light exposure within every pixel in the sensor. Within the field of film photography, the photographic film used would produce a slight chemical change within the film causing an invisible latent image which could be amplified chemically. Nowadays, digital cameras utilize electronic sensors, which relate photons to electrons, converting light to electronic signals. The exposure of light onto each individual pixel represents the intensity of color within that pixel, producing an image. The two competing standards of digital sensors within cameras, CCD and CMOS sensors, both convert photons to electronic signals, although, CCD sensors are less susceptible to light.

## Periodic Trigonometric Functions: The Science of Sound

For this section, I originally wanted to discuss Fourier Transforms and FFTs, but that **definitely** would have taken more than ~3 pages of work. It may have taken ~200 words for the applications themselves. So I decided to stick to sound. As someone who constantly has their headphones in, for both ease and as a sensory blocker, music has always been a large part of my life.

### Production of Sound

Sound is produced by a vibrating object, which propagates as waves of oscillating air pressure, which is then interpreted by the ear as sound. When an object vibrates, it produces a ripple effect, causing the air molecules neighbouring that object to vibrate, which causes a slight change in air pressure over time, affecting other nearby air molecules, further transmitting the sound. 

Different classes of instruments utilize different mechanisms to product a unique sound. Some examples include:
- **Percussion:** Percussion instruments produce sound when struck, shaken, or scraped. For example, when a drum is struck, the shell changes in shape, which causes the air within the shell to compress, which creates a vibration.
- **String instruments:** Stringed instruments produce sound when the strings are activated in some manner. In the case of bowed string instruments, the performer would rub the string using their bow, causing the string to vibrate and produce sound.
- **Piano**: Technically, a piano is both a stringed and percussion instrument, as it produces sound when wooden hammers, covered by a softening material such as leather or pelt, strike the strings within the piano.

Curiously enough, plotting the oscillating change in pressure of a **pure tone** produces a wave incredibly similar to a sine wave. As a matter of fact, each pure musical note may be represented as a sine wave, with a unique equation determined by it's frequency and amplitude. Although, the shape and waveform of the sound pressure wave differ for different instruments, as each instrument produces a unique vibration.

Sine waves, without vertical nor horizontal shifts, may be modeled by the general equation $$f(x) = Asin(kx)$$, where $$A$$ is the amplitude of $$f(x)$$ and $$\dfrac{2\pi}{k}$$ is the period of $$f(x)$$. Within the realm of sound, the frequency, measured in Hz, is denoted by the amount of times per second that the sound pressure wave repeats itself. Assuming that the period is in seconds, the frequency may be calculated as the reciprocal of the period: $$\dfrac{1}{(\dfrac{2\pi}{k})} = \dfrac{k}{2\pi}$$.

The differences between notes, such as middle C and low D, can be attributed towards changes in frequency. Every note has their unique corresponding frequency. For example, the frequency of middle C is approximately 261.6Hz, in comparison to the A note above middle C, which is often tuned to a perfect 440Hz. The faster an object vibrates, the higher the frequency, which corresponds to an audibly higher note.

If the amplitude of two sound pressure waves differ, but the frequency remains the same, both sounds will be interpreted as the same note, but at varying levels of volume.

Assuming that the amplitude (volume) is 1 , the sound pressure wave produced by middle C may be modeled by the equation $$f(x) = sin(2\pi*261.6x)$$. Similarly, the sound pressure wave that's produced by the A note above middle C (440Hz) can be modeled by the equation $$f(x) = sin(2\pi*440x)$$.

### Music Theory and Frequencies

Note that this section uses scientific pitch notation, where the name of the note is concatenated with the octave. For example, "C4" is the C note in the 4th octave, and "C5" is one octave higher than C4.

In music, octaves relate two notes whose frequencies have a quotient of 2. That is, one note has twice the frequency of the other. For example, given that the frequency of A4 is 440Hz, the frequency of A3 and A5 are exactly 220Hz ($$\dfrac{440\text{Hz}}{2}$$) and 880Hz ($$440\text{Hz}*2$$) respectively.

Within an octave, there are 8 tones and 12 semitones. The twelve-tone equal temperament system (12-TET) is a musical system that determines the frequency of each semitone within an octave using a logarithmic scale, as opposed to a linear scale. For an octave to relate two notes with a frequency quotient of 2, the logarithmic ratio between semitones must be $$2^{1/12}$$. This ratio is highly beneficial towards tuning instruments, as, all instruments may be tuned according to a specific standard to produce similar sounds. As of 2023, the A440 pitch standard is used for tuning, where the A note above middle C is tuned to precisely 440Hz, and the rest of the notes are tuned using A4 as a basis. Using the knowledge of the logarithmic ratio ($$2^{1/12}$$), the frequency of any other note can be calculated, given the amount of semitones away from A4.

For example, B4, which is 2 semitones away from A4, has a frequency of $$440*(2^{1/12})^2 = 493.88$$.

Much of music theory is built upon the ratios between frequencies. For example, the ratio of $$\dfrac{3}{2}$$ between frequencies, known as the "pure" perfect fifth, is often regarded as the most consonant, natural and harmonious ratios. There exists an entire tuning system based off of the $$3:2$$ ratio, known a Pythagorean tuning. Within the Pythagorean tuning system, the frequency ratio between adjacent notes are all $$3:2$$. The 12-TET system is able to approximate many intervals in music with limited error. For example, the ratio $$3:2$$ may be approximated as $$2^{7/12}$$, where the 7 represents the amount of semitones between notes, with an error of approximately $$0.0017$$ less than the ratio of $$3:2$$. Furthermore, the 12-TET system also approximates a perfect fourth, with a ratio of $$4:3$$, with a limited amount of error. A perfect fourth between notes is 5 semitones apart, which means that from one note, to it's corresponding perfect fourth, the frequency ratio will be $$2^{5/12}$$, which returns an difference of approximately $$0.0015$$.

Obviously, when listening to music, sounds are not being perceived as a singular note (at least, not for me, I'm not sure what kind of music you listen to). Sounds are transmitted as the sum of multiple sound pressure waves, producing a periodic, yet non-sinusoidal, waveform. 

### Synthesizers

It's always awesome to see how technology is able to add custom features to digital implementations of physical objects. The case of the synthesizer is hardly any different. I vaguely remember interacting with a synthesizer for the first time, playing around with the different noises and smashing different keys, wondering why this "piano" made so many different sounds. A synthesizer is a digital instrument whose function is to produce electronic signals, which represent audio signals that can be converted to sound using amplifiers and speakers. The electronic nature of a synthesizer allows it to implement more features than traditional instruments, such as the capability to switch between instruments, built-in filtering and effects, as well as the capability of storing samples.

To produce audio, synthesizers generate wave forms, which are then represented as electronic signals. What truly differentiates a synthesizer from a normal instrument are the various amounts of tones that may be produced through electronic waveforms of different shapes. A method of generating these tones is known as "*additive synthesis*". Additive synthesis further utilizes the concept of representing sound pressure as sine waves, and produces unique tones by combining multiple sine waves with different amplitudes, periods, and phase shifts. There exists an entire branch of mathematics, known as Fourier Analysis, dedicated towards decomposing non-sinusoidal periodic functions as the sum of simpler trigonometric functions, such as the sine and cosine functions. Additive synthesis often results in the production of many unique sounds, such as saw or square waves, which are both represented by the converging sum of a sinusoidal series.

For example, a square wave may be modeled by the following convergent infinite series:

$$f(t) = \dfrac{4}{\pi} \sum_{k=1}^{\infty}\dfrac{sin(2\pi t(2k-1))}{2k-1}$$


<center style="display: flex; justify-content: center">
<img style="width:20em; object-fit: cover; padding: 1em;" src="/src/pix/applications/square.jpg" alt="Approximated Square Wave"/>
<img style="width:20em; object-fit: cover; padding: 1em;" src="/src/pix/applications/100-square.jpg" alt="Approximation using a 100 term series"/>
<img style="width:20em; object-fit: cover;" src="/src/pix/applications/precise-square.jpg" alt="Higher Precision square wave"/>
</center>

<br>
<center>
<p> The first image approximates the square wave using a 4 term series. The second image approximates the square wave to a higher degree, using a 50 term series. Finally, the final image represents a nearly perfect approximation of the square wave, using a 1000 term series, ending at $k=1000$. As the number of terms in the series increases, the better the sum of sine waves approximates the square wave. </p>
</center>


## Discrete Functions: Pascal's Triangle, Combinatorics, and Graph Theory

Pascal's Triangle, other than having the marvelous ability of being able to compute the [Fibonacci Sequence](/src/pix/applications/fib-pascal.png), often appears within the fields of both combinatorics and probability. The field of math known as combinatorics revolves primarily around counting. Although, as the name implies, combinatorics isn't solely about counting, but also the combination and division of objects to create new objects that conform to a certain criteria. Combinatorics is a relatively broad field of math, having it's ties to a variety of other mathematical fields such as algebra, geometry, probability, and much more. 

An infamous, yet incredibly simple, combinatorics question is the classic "Handshake Puzzle". The question goes like so: "If a room contains 5 people, and each person shakes hands with everyone else in the room exactly once, how many handshakes occur?". Such a simple premise, yet, stumping for some. When I was first introduced to this problem, I, like many others, relied on brute force.

Given a small enough set of people, the question can be complete using a brute force method in minimal time. For example, in this case, the case number (5) is small enough to compute all of the [cases](/src/txt/handshakes.txt) within a relatively short time frame. Although, brute forcing becomes exponentially more difficult as the amount of people increases. For example, it's difficult to brute force if there were 100, or 1000, people in the room. 

Alternatively, the question may be reworded to use combinatorics. The combinatorics solution rewords the problem into "How many unique pairs of people are there in this room". Mathematically, this may be represented as $$n \choose 2$$, which denotes the computation for the amount of unique subsets of size 2, within a larger set of size $$n$$. Within the context of this question, $$n$$ is the amount of people in the room. 


<p style="float: left">Math involving combinatorics surrounds us. In computer science, combinatorics is often used for optimizing, and determining the relationships between different objects. Using combinatorics, complex problems are narrowed down to simpler problems. Graph theory, a branch of computer science, is the study of relationships between objects (in a graph), and is often considered a subset of combinatorics. Graph theory can be used to model and represent many networks. Graphs can be used to model simple interactions within networks, such as how webpages in a website interact, as well as complex topics, such as modeling the relationships between genes in biology. These graph structures can then employ combinatorics to further analyze the interaction between objects. For example, a graph structure can represent a network of interconnected notes, and a traversal algorithm may be used to find the number of paths from one note to another, which may signify the relationship between notes.</p>
<img style="width:20em; object-fit: cover; float: right" src="/src/pix/applications/graph-website.png" alt="A graph representing the connection between webpages"/>

Although, this note taking scenario is relatively subjective, and is an uncommon application of combinatorics and graph theory. More significantly, combinatorics has a large influence within the field of probability. The general probability of some event, $$P(n)$$, is equivalent to $$\dfrac{count}{total}$$. Combinatorics is used to find the number of occurrences of an event/circumstance within a larger set. 

For example, if I were to flip a fair coin exactly 4 times, what is the probability that exactly 2 flips land on heads. 

In this case, $$P(n) = \dfrac{3}{8}$$, as the total number of possibilities is $$2^4=16$$ and there are $${4 \choose 2} = 6$$ possible combinations of heads and tails involving exactly 2 heads. Note that the matter of determining the count of heads in this situation is the same as determining the number of total handshakes that occur within a room of 4 people.

Although, probability and combinatorics have significantly larger applications than flipping coins. The two fields of mathematics are used for incredibly important topics, such as gambling! Gamblers use combinatorics to aid their decisions, occasionally helping them win big.

### The Math Behind Gambling

Games of chance, which are games whose outcome are strongly, nay solely, influenced by a random device, such as dice or roulette wheels are excellent real-life examples of combinatoric applications. Games of chance, such as craps, roulette, lotteries, and **occasionally**, poker, are often the root of serious gambling addictions, primarily due to the possibilities of winning big. Games of chance are often preferable to games of skill, as one gracious, god-sent moment can win one thousands, or even millions. Though, most gamblers don't understand how unlikely these chances truly are. Although, one may be able to predict their odds of winning using mathematics, which benefits their possibilities.

For example, a simple example of calculating a probability is calculated one's probability of receiving a royal flush. If there are 52 cards in a deck, then there exist $${52 \choose 5} = 2598960$$ possible sets of cards. The frequency of each "hand" (set of playing cards), can then be computed by finding the frequency within the total possible sets of cards. The most notable hand in poker is known as the "royal flush". It's the hand of straights from ten to an ace (a straight is 5 consecutive cards), where all five cards are of the same suit. There only exists 4 different variations for the royal flush, one for each suit. Therefore, the probability of a hand being a royal flush is $$\dfrac{4 \choose 1}{52 \choose 5} = 0.00000153907$$. Definitely not the most probable hand.

Probability is used to understand the possibilities of a variety of outcomes. These outcomes, within the context of gambling, may be utilized to make informed decisions and actions, thus, greatly reducing the chance of loss. Probability has a direct correlation with stakes and odds, allowing gamblers to predict a future gain/loss. Although, while many attribute large, innumerable winnings to luck, the basis of this "luck" is often probability mathematics. Therefore, the next time you decide to go gambling, don't forget to bring your calculator.

Furthermore, probability can be used to understand many seemingly unintuitive cases of logic, such as the "Birthday Paradox" and the "Monty Hall Problem". Both of these problems don't necessarily require combinatorics to be proved, but are still interesting problems due to the way that they're reworded by mathematics. For example, the "Birthday Paradox" states that, within a room of 23 people, the probability that two people share a birthday exceeds $$50%$$. This seems counterintuitive at first glance, but can be easily proven. Starting from a simple case of 2 people in a room, the probability that they don't share the same birthday is

$$1-\dfrac{365}{365}\dfrac{364}{365} = 0.00274 = 0.274%$$ 

Extending this to a room of three people, the probability that they don't share the same birthday is

$$1-\dfrac{365}{365}\dfrac{364}{365}\dfrac{363}{365} = 0.008204165885 = 0.820%$$

Thus, if this pattern was extended to 23 people, it would be equivalent to

$$1-\prod_{k=1}^{22}{\dfrac{365-k}{365}} = 0.507297 = 50.7297%$$

Fun fact, probability originated from a correspondence between two notable mathematicians, Pascal and Fermat, about games of chance (there's the name Pascal again, I'm starting to think he might be important in the field of probability?). It seems as if one of the largest, and most applicable branches of mathematics, probability, was made for gambling. After all, what's life, if not a game of chance.

Math is a beautiful thing. It's something that powers everyone's existence. There's often ramble about how people need not be good at "mental math", or even math in general, due to the vast populous of digital resources. To that I say, how do you think those resources got there in the first place?

### Bibliography:

- [Numeric Linear Algebra - Wikipedia](https://en.wikipedia.org/wiki/Numerical_linear_algebra)
- [Computer Algebra System - Wikipedia](https://en.wikipedia.org/wiki/Computer_algebra_system)
- [Optimization using Linear Algebra - Jeremy Kun](https://jeremykun.com/2014/06/02/linear-programming-and-the-most-affordable-healthy-diet-part-1/)
- [Shamir's Secret Sharing Scheme - Wikipedia](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing)
- [Divide and Conquer Algorithms - Wikipedia](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)
- [Snells Law - Wikipedia](https://en.wikipedia.org/wiki/Snell%27s_law)
- [How a Camera Works - HowStuffWorks](https://electronics.howstuffworks.com/camera.htm)
- [12 Equal Temperament - Wikipedia](https://en.wikipedia.org/wiki/12_equal_temperament)
- [Additive Synthesis - Wikipedia](https://en.wikipedia.org/wiki/Additive_synthesis)
- [Additive Synthesis - Apple](https://support.apple.com/en-ca/guide/logicpro/lgsife419a84/mac)
- [Synthesizers - Wikipedia](https://en.wikipedia.org/wiki/Synthesizer)
- [Combinatorics and Graph Theory - lagout.org](https://doc.lagout.org/science/0_Computer%20Science/3_Theory/Graph%20Theory/Combinatorics%20and%20Graph%20Theory.pdf)
- [Gambling Mathematics - Wikipedia](https://en.wikipedia.org/wiki/Gambling_mathematics)
