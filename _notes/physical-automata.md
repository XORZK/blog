---
title: Physical Automata
date: 2023-01-19
layout: default
description: An interesting engineering idea with cellular automata
tags: math cs engineering
---

I had an interesting idea regarding [cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton) a couple days ago. Although there has been a lot of online cellular automata simulation, I've never personally seen someone simulate cellular automata on a physical board. I'm thinking of starting a engineering project that would let me declare the rules regarding a certain cellular automata situation, and then simulating that situation using a physical grid. 

A couple months ago, I built my own cellular automata simulator using SDL2 and C++, and it's not really that complex. After thinking about the project for a little while, the largest problem has to do with switching the identifying and switching the different cells in the grid. If I have an $$N*N$$ grid, on the off chance that the cells in the grid are all alive or all dead, I will need $$2N^2$$ blocks total ($$N^2$$ for each state). That is, assuming that there are only 2 states (dead and alive).

I think the primary appeal associated with the idea lies in the physical switching of the cells themselves. Personally, I think it'll provide a deeper intuitive understanding of the behavior of certain automata.

----- 

As of 02-10-2023, I'm trying to devise an algorithm that doesn't require iterating through the entirety of the grid. An idea is to come up with an algorithm that computes the "scope" of cells that are subject to change, which may be more efficient for some cases.

I was thinking about maintaining a vector of live cells, which has been the most efficient solution as of late. Furthermore, to improve the efficiency of the program, I've implemented the grid using a 1D array, which involves some more complexity when it comes to indexing, but I imagine that it'll marginally improve performance. 2-D arrays appear to store an array of pointers, pointing to individual 1-D arrays, which uses more memory, and loses cache locality. 


