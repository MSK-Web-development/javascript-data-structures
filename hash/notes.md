
### A Hash table (also called a hash, hash map, unordered map or dictionary) 
- is a fixed-sized data structure in which the size is defined at the start
- are implemented using a hash function to generate an index for the array.
- pairs keys to values.

#### Hashing technique
- a technique to convert a range of key values into a range of indexes of an array of buckets / slots
- *The goal is to place values at particular indexes in RAM by determining the indexes through a hashing function.

#### collision
- If the Hash function returns same index for 2 keys, its called a collision.
- Ideal hasing function should never produce collisions. But this is impossible as RAM memory is finite.
