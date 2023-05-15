---
title: P vs. NP
date: 2023-02-13
layout: default 
description: Notes on the P vs. NP problem
tags: cs
---

## A Simple Introduction 

> In short, the P vs. NP problem asks whether every problem whose solution may be quickly verified, can also be quickly solved. 
> In this context, quickly means verifying using an algorithm running in polynomial time.

Complexity classes define sets of problems of related resource-based complexity. The complexity class of decision problems that can be solved in polynomial time is known as P, also known as **PTIME** or **Class P**. Likewise, the set of decision problems that can be verified in polynomial time is known as NP, which stands for "non-deterministic polynomial time". There exists much more complexity classes, such as co-NP or NL, which define a set of problems that have a shared property of time complexity, but P and NP are some of the most prominent within the field of computer science.

It's obvious that P is a subset of NP, as all problems that are solvable in polynomial time, are by definition, verifiable in polynomial time.

The rough basis of the "P vs. NP" problem asks whether $$\text{P} = \text{NP}$$. If $$\text{P} = \text{NP}$$, this would solve millions of computational problems, as it would define a basis that states that every problem that is verifiable in polynomial time is solvable in polynomial time. If $$\text{P} = \text{NP}$$, then, finding the efficient, polynomial time complexity algorithm would become the new problem.

One major problem that stands in the way of proving $$\text{P} = \text{NP}$$ is the fact that it must be proven for, generally, **all problems** in NP. Whereas, proving that $$\text{P} \ne \text{NP}$$ only requires one problem in $$NP$$ that cannot be solved in polynomial time. Although, this is simultaneously as difficult as how does one prove that the optimal algorithm has already been found, as does not run in polynomial time. 

A common example of an NP problem is the problem of finding an integer's prime factors. Although the answers can be verified using simple multiplication, solving it requires searching systematically for possible prime candidates. Although, Shor's algorithm for finding prime factors, which was designed to run on a quantum computer, runs in polynomial time complexity.

## NP-completeness

A decision problem is known to be "NP-complete" if and only if:
1. The problem is in NP, meaning that it's solution can be verified in polynomial time.
2. The problem may be used to simulate every other problem in NP. This means that every other problem in NP is reducible to an NP-complete problem in polynomial time.

Every problem that satisfies condition 2 is known as an "NP-hard" problem.

Therefore, if any NP-complete problem can be solved quickly (in polynomial time), since every other problem is reducible to an NP-complete problem, they are, by definition, solvable in polynomial time. Thus, if some NP-complete problem, $$c \in \text{P}$$, then $$\text{P} = \text{NP}$$. 

Fun fact, sudoku is NP-complete. This is due to the fact that after many mechanical transformations, it can be used to find solutions to the Boolean satisfiability problem, which has been proven to be NP-complete. This means that devising an algorithm that solves sudoku in polynomial time proves $$\text{P} = \text{NP}$$.
