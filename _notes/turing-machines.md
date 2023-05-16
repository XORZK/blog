---
title: Turing Machines
date: 2023-02-13
layout: default
description: An Exploration into Turing Machines.
tags: cs
---

Turing machines are a model of computation that manipulates symbols on an infinitely long strip of tape according to a table of rules. Despite the model's simplicity, it's been proven to be able to implement any computer algorithm. 

The Turing machine has 4 main components:
- An infinitely long strip of memory, split into cells, which hold a singular symbol from the alphabet of the machine.
- A read/write head which is positioned over one of these cells.
- A state register, which stores the current state of the machine.
- A finite table of instructions:
	- This table operates on the current of the state of the machine ($$q_i$$) and the symbol read from the tape ($$a_j$$).
	- Using these states, $$q_i$$ and $$a_j$$, the machine can:
		- Erase or write a new symbol to the current cell.
		- Move the head one cell to the left or right (denoted as $$L$$, $$R$$, or $$N$$ [neutral]).
		- Change states ($$q_i$$ becomes $$q_{i_1}$$).

For a system to be denoted as Turing complete, it must be able to simulate a Turing machine, which, by definition, means that it's theoretically capable of expressing any task definable by an algorithm, ignoring the limitations of finite memory. For example, the card game, "Magic: the Gathering" is Turing complete. Crazy, right?

## Formal Definition

A Turing machine can be formally defined as a 7-tuple $$\langle Q, \Gamma, b, \Sigma, \delta, q_{0}, F\rangle$$ where:
- $$Q$$ is a finite, non-empty set of states.
- $$\Gamma$$ is a finite, non-empty set of alphabet symbols.
- $$b \in \Gamma$$ is the blank symbol. At any time, a Turing machine has an infinite amount of $$b$$ on the tape.
- $$\Sigma \in \Gamma \setminus \{b\}$$ is the set of input symbols.
- $$\delta$$ is a partial function known as the transition function. It defines the behavior of the Turing machine given a symbol and state.
- $$q_0 \in Q$$ is the initial state.
- $$F \in Q$$ is the set of accepting states. If the Turing machine eventually reaches state $$F$$, it's said to have accepted the initial tape contents.
