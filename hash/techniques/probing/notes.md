- To work around occurring collisions, the probing hashing technique finds the next available index in the array

# Linear probing
- resolves conflicts by finding the next available empty index via incremental trials.
- However, now when the get(key) function is used, it has to start at the original hash result (7) and then iterate until 18 is found.

# Disadvantages
-  it easily creates clusters, which are bad because they create more data to iterate through.


# Quadratic probing
- uses quadratic functions to generate incremental trials.
- uses perfect squares instead of incrementing by 1 each time
- this helps to evenly distribute across the available indices

# Disadvantages
- uses more memory
