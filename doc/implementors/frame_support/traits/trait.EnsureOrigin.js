(function() {var implementors = {};
implementors["frame_system"] = [{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId&gt;&gt;, AccountId&gt; EnsureOrigin&lt;O&gt; for EnsureRoot&lt;AccountId&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId&gt;&gt;, AccountId:&nbsp;Default&gt; EnsureOrigin&lt;O&gt; for EnsureSigned&lt;AccountId&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId&gt;&gt;, Who:&nbsp;Contains&lt;AccountId&gt;, AccountId:&nbsp;PartialEq + Clone + Ord + Default&gt; EnsureOrigin&lt;O&gt; for EnsureSignedBy&lt;Who, AccountId&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId&gt;&gt;, AccountId&gt; EnsureOrigin&lt;O&gt; for EnsureNone&lt;AccountId&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; EnsureOrigin&lt;O&gt; for EnsureNever&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;AccountId, O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId&gt;&gt;, L:&nbsp;EnsureOrigin&lt;O&gt;, R:&nbsp;EnsureOrigin&lt;O&gt;&gt; EnsureOrigin&lt;O&gt; for EnsureOneOf&lt;AccountId, L, R&gt;","synthetic":false,"types":[]}];
implementors["pallet_collective"] = [{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId, I&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId, I&gt;&gt;, AccountId:&nbsp;Default, I&gt; EnsureOrigin&lt;O&gt; for EnsureMember&lt;AccountId, I&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId, I&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId, I&gt;&gt;, N:&nbsp;U32, AccountId, I&gt; EnsureOrigin&lt;O&gt; for EnsureMembers&lt;N, AccountId, I&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId, I&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId, I&gt;&gt;, N:&nbsp;U32, D:&nbsp;U32, AccountId, I&gt; EnsureOrigin&lt;O&gt; for EnsureProportionMoreThan&lt;N, D, AccountId, I&gt;","synthetic":false,"types":[]},{"text":"impl&lt;O:&nbsp;Into&lt;Result&lt;RawOrigin&lt;AccountId, I&gt;, O&gt;&gt; + From&lt;RawOrigin&lt;AccountId, I&gt;&gt;, N:&nbsp;U32, D:&nbsp;U32, AccountId, I&gt; EnsureOrigin&lt;O&gt; for EnsureProportionAtLeast&lt;N, D, AccountId, I&gt;","synthetic":false,"types":[]}];
implementors["pallet_society"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; EnsureOrigin&lt;&lt;T as Config&gt;::Origin&gt; for EnsureFounder&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()