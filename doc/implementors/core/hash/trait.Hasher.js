(function() {var implementors = {};
implementors["adler"] = [{"text":"impl Hasher for Adler32","synthetic":false,"types":[]}];
implementors["ahash"] = [{"text":"impl Hasher for AHasher","synthetic":false,"types":[]}];
implementors["hash256_std_hasher"] = [{"text":"impl Hasher for Hash256StdHasher","synthetic":false,"types":[]}];
implementors["rustc_hash"] = [{"text":"impl Hasher for FxHasher","synthetic":false,"types":[]}];
implementors["twox_hash"] = [{"text":"impl Hasher for XxHash64","synthetic":false,"types":[]},{"text":"impl Hasher for XxHash32","synthetic":false,"types":[]},{"text":"impl Hasher for Hash64","synthetic":false,"types":[]},{"text":"impl Hasher for Hash128","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()