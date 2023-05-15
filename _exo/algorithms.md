---
title: DSA Ramblings
date: 2023-04-07
layout: default
description: Rambling about random parts of algorithms and/or data structures
tags: cs algorithms
---

## GENERAL NOTES
- Some "notes" about algorithms and/or data structures

### Doubly Linked Lists (and Nodes)
- Imagine you have a doubly linked list (LL): {A} <-> {B} <-> {C} where A, B and C are nodes.
- Usually, the implementation to add a new node to a linked list would be something like:
	- push(x: Node):
		1. get tail of the linked list (T).
		2. T.set_next(x)
		3. x.set_prev(T)
- Although, wouldn't this process be further simplified if the set_next(x: Node) method included the set_prev(x: Node) call within itself, and likewise, a set_prev(x: Node) method within the set_next(Node: x) method?
