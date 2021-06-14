- Another great way to uniformly distribute the keys is by having a second hashing function that hashes the result from the original.

# A commonly used implementation

# HashFunction
hash2(x) = R − (x % R)

# Incremental trial
i * hash2(x)

where,
x -> Result of the first hashing
R < size(hash table)
i -> iteration trial number
