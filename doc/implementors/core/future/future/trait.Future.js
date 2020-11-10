(function() {var implementors = {};
implementors["futures_channel"] = [{"text":"impl&lt;T, '_&gt; Future for Cancellation&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for Receiver&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_task"] = [{"text":"impl&lt;T, '_&gt; Future for LocalFutureObj&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; Future for FutureObj&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["sc_consensus_babe"] = [{"text":"impl&lt;B:&nbsp;BlockT&gt; Future for BabeWorker&lt;B&gt;","synthetic":false,"types":[]}];
implementors["sc_network"] = [{"text":"impl&lt;B:&nbsp;BlockT + 'static, H:&nbsp;ExHashT&gt; Future for NetworkWorker&lt;B, H&gt;","synthetic":false,"types":[]}];
implementors["sc_network_gossip"] = [{"text":"impl&lt;B:&nbsp;BlockT&gt; Future for GossipEngine&lt;B&gt;","synthetic":false,"types":[]}];
implementors["tracing"] = [{"text":"impl&lt;T:&nbsp;Future&gt; Future for Instrumented&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()