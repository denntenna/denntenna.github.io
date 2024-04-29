"use strict";(self.webpackChunkdenntenna_github_io=self.webpackChunkdenntenna_github_io||[]).push([[8396],{78429:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return c}});var a=n(63366),l=(n(67294),n(64983)),o=n(66101),i=["components"],r={},p={_frontmatter:r},s=o.Z;function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(s,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Python"),(0,l.kt)("h2",null,"Footguns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"difference between ",(0,l.kt)("inlineCode",{parentName:"li"},"is")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"=="))),(0,l.kt)("h2",null,"Tips and Tricks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"from time import sleep"),(0,l.kt)("li",{parentName:"ul"},"Open your current file in interactive mode to inspect/debug it\n",(0,l.kt)("inlineCode",{parentName:"li"},"python -i file.py")),(0,l.kt)("li",{parentName:"ul"},"String templating ",(0,l.kt)("inlineCode",{parentName:"li"},'print("%s : %s" % (name, age))')),(0,l.kt)("li",{parentName:"ul"},"Pipenv environments are stored in ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.local/share/virtualenvs"),". Can be deleted as part of system cleanup")),(0,l.kt)("h2",null,"Lists"),(0,l.kt)("p",null,"`a = ","[1, 2, 3]"),(0,l.kt)("p",null,"Python now has tools inspired from haskell to operate with lists in the module itertools. Documentation is ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/itertools.html"},"here")),(0,l.kt)("p",null,"Use a list as stack"),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"stack = [2,3,4]\nstack.append(5)\nstack.append(6)\nstack.pop()\nstack.pop()"),"\n        "),(0,l.kt)("p",null,"Use a list as Queue"),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'from collections import deque\nqueue = deque(["apple", "banana", "cat"])\nqueue.append("dog")\nqueue.append("elephant")\nqueue.popleft()\nqueue.popleft()'),"\n        "),(0,l.kt)("p",null,"List Comprehensions\na concise way to create list"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. The result will be a new list resulting from evaluating the expression in the context of the for and if clauses which follow it.")),(0,l.kt)("p",null,"List Display and Comprehension\n",(0,l.kt)("inlineCode",{parentName:"p"},"a = [x*x for x in range(10)]")),(0,l.kt)("h2",null,"Generators"),(0,l.kt)("p",null,"If your function uses the yield command, its a generator."),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"def natural_numbers():\n    i = 0\n    while True:\n        yield i\n        i ++"),"\n        "),(0,l.kt)("p",null,"You can pass generators to functions as paramters by prefixing ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," to the parameter name - ",(0,l.kt)("inlineCode",{parentName:"p"},"def fun(*gen)")),(0,l.kt)("p",null,"Multiple ways to use iterators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"with a for loop")),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"    for num in natural_numbers:\n        print(num)"),"\n        "),(0,l.kt)("p",null,"inline usage"),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"  value = sum(next(t) for n in slice(natural_numbers, 10))"),"\n        "),(0,l.kt)("p",null,"Use yield without a value"),(0,l.kt)("p",null,"Simply writing the command yield, yields control to the calling code."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Convert a generator into a context manager")),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"from contextlib import contextmanager\n\n@contextmanager\ndef db_test(cur):\n  cur.execute('create table points(x int, y int)')\n  try:\n    yield\n  finally:\n    cur.execute('drop table points ')"),"\n        "),(0,l.kt)("h2",null,"Class"),(0,l.kt)("p",null,"Special functions in a Class"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__init__")," : constructor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__repr__")," : print your class sensibly"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__add__")," : operator overload the + operator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__iter__"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"__next__")," : make the class iterable",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"raise StopIteration()"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__enter__"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"__exit__")," : make your class a ContextManger, with setup and teardown functions.")),(0,l.kt)("h2",null,"Internals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"see what happens in the python bytecode")),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"from dis import dis\ndis(function_name)"),"\n        "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"inspect source code of a function in runtime")),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"from inspect import getsource\ngetsource(add)"),"\n        "),(0,l.kt)("h1",null,"Ecosystem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eventlet.net/doc/index.html"},"Eventlet")," brings concurrency to python")),(0,l.kt)("h2",null,"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cKPlPJyQrt4"},"So you want to be a python expert")," by James Powell"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OSGv2VnC0go"},"Transforming Code into Beautiful Idiomatic Python")," by Raymond Hettinger"),(0,l.kt)("li",{parentName:"ul"},"Documentation for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/collections.html"},"Collections")),(0,l.kt)("li",{parentName:"ul"},"An opinionated ",(0,l.kt)("a",{parentName:"li",href:"https://docs.python-guide.org/"},"guide")," to python")),(0,l.kt)("h1",null,"Starting a new Python project"),(0,l.kt)("h1",null,"Pipenv for package management and virtual environment"),(0,l.kt)("h2",null,"Notes from Idiomatic Python"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ChainMap"),(0,l.kt)("li",{parentName:"ul"},"Clarify function calls with keyword arguments",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You are sacrificing performance but improving developer time"))),(0,l.kt)("li",{parentName:"ul"},"named tuples")),(0,l.kt)("deckgo-highlight-code",{terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'from collections import namedtuple\n\n\ndef named_tuples(a: int):\n    Results = namedtuple("Result", ["status", "payload"])\n    if a < 0:\n        return Results("error", {})\n    if a > 0:\n        return Results("success", {"number": a})\n\n\nprint(named_tuples(3))\nprint(named_tuples(-1))'),"\n        "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updating Multiple state variables"),(0,l.kt)("li",{parentName:"ul"},"Decorators and Context Managers : Help separate business logic from administrative ones")),(0,l.kt)("h1",null,"Async"),(0,l.kt)("p",null,"Notes from ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=9zinZmE3Ogk"},"Keynote on Concurrency, PyBay 2017"),"\nGoal : When to use threads, processes, asyncs. Advantages and disadvantages"),(0,l.kt)("h1",null,"Functional Programming"),(0,l.kt)("h3",null,"Creating partial functions - ",(0,l.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/functools.html#functools.partial"},"documenttion")),(0,l.kt)("p",null,"This reminds me of currying in haskell"),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'def user(name, age, role):\n    return {"name":name, "age":age, "role":role}\n\nmanager = partial(user, role="manager")\nadmin   = partial(user, role="admin")\n\nprint(user(name="denny", age="32", role="user"))\nprint(manager(name="denny", age="38"))\nprint(admin(name="denny", age=42))'),"\n        "),(0,l.kt)("h3",null,"Pattern and Matching"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0636/"},"https://peps.python.org/pep-0636/"),"\nHow to implement delegation using pattern matching"),(0,l.kt)("p",null,"Requires python 3.10+"),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'action_pass = {"type": "pass", "payload": {"name": "denny"}}\naction_keep = {"type": "keep", "payload": {}}\n\naction = action_pass\n\nmatch action:\n    case {type, payload}:\n        print(type)'),"\n        "),(0,l.kt)("h2",null,"Live Development Process with Reload"),(0,l.kt)("p",null,"Uses the inotify syscall on linux to trigger reload of the program upon file changes"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/python-live-reload.gif",alt:"Cli Gif"})),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'import inotify.adapters\nimport subprocess\n\ndef watch():\n    i = inotify.adapters.Inotify()\n\n    i.add_watch(\'./\')\n\n    for event in i.event_gen(yield_nones=False):\n        (_, type_names, path, filename) = event\n\n        #print("PATH=[{}] FILENAME=[{}] EVENT_TYPES=[{}]".format(path,filename,type_names))\n        for type in type_names:\n            #print("type: {} path: {} filename: {}".format(type, path, filename))\n            if type == "IN_CLOSE_WRITE" and ".py" in filename:\n                print(\'reload file\')\n                subprocess.run(["python", "hello.py"])\n\nif __name__ == \'__main__\':\n    watch()'),"\n        "),(0,l.kt)("h1",null,"Numerical and Scientific Computing"),(0,l.kt)("deckgo-highlight-code",{language:"python",terminal:"carbon"},"\n          ",(0,l.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"import numpy as np\nimport plotly.express as px\n\nx = np.linspace(-np.pi, np.pi, 50)\ny = np.array([np.sin(i) for i in x])\nfig = px.scatter(x=x, y=y)\nfig.show()"),"\n        "),(0,l.kt)("p",null,(0,l.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}},"\n      ",(0,l.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/38a4f7679662eac3397bea7ddf4f1b22/fdaf8/plotly-numpy-101.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,l.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABV0lEQVQ4y6VTa3ODIBDM//+FnaZtXj6iRhNNQTTAdhYkok0/1fHmjjtY9h5sYC3/f392Atl4baFGDaEekJOIlZZKP9fd9wNymOPDqJ+gm4BctwqnUiCpXkt6kS7+fpB42wtsTxKnSjhf3ak1oHXOcPCVZLXEB0FKibyROOQS+5wxgaYbZkAaxhhU1+jwWtcSx7PE4ezBksrrXSZxLASu9wjQGJ9ycx/+ZEgAsslWjOn/TFYMH1rDWoNLq9yN3BhLTnaFRFpF/ssyVrerlFnDplPY5T6tcHtgFy6aGYuF/aKG2tWQh75Sv5E1onAdGhFSDToLgHENw9jwFgZZ5O2RrITrKtmxkzGzWHN0lmPjLdzuCnktULU9MqaZ9kiKHuWtR3HtUU7ibPoa6TTr2IrxN0N+WvuJ5xixrmwW49oYF6PtY9OeKbZ4emERHLNevlMTOezq8cdnfwB1/evpP/yI1AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"numpy simple plot",title:"numpy simple plot",src:"/static/38a4f7679662eac3397bea7ddf4f1b22/fdaf8/plotly-numpy-101.png",srcSet:["/static/38a4f7679662eac3397bea7ddf4f1b22/5a46d/plotly-numpy-101.png 300w","/static/38a4f7679662eac3397bea7ddf4f1b22/0a47e/plotly-numpy-101.png 600w","/static/38a4f7679662eac3397bea7ddf4f1b22/fdaf8/plotly-numpy-101.png 674w"],sizes:"(max-width: 674px) 100vw, 674px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/doc/stable/reference/routines.statistics.html"},"Statistics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/doc/stable/reference/random/index.html"},"Randomness")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/doc/stable/reference/routines.math.html"},"Maths")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/doc/stable/reference/routines.logic.html"},"Logic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://numpy.org/doc/stable/reference/routines.logic.html"},"Linear Algebra"))),(0,l.kt)("p",null,"SciPy, Pandas and OpenCV use numpy array as the common format for data exchange"))}c.isMDXComponent=!0},63366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-cheatsheets-python-mdx-3139759779fef7e85326.js.map