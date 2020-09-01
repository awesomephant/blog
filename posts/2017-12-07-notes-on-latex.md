---
layout: post
title:  "LaTeX Recipes"
date: 2017-12-03 22:00:00
tags: post
thumb: ""
intro: "I just spent the last weeks writing my dissertation on Collectivist Housing. Like everyone else, I did it in Word, which was a huge pain."
---

I spent at least a day and a half getting all my figures numbered correctly, making sure my bibliography was formatted correctly, all my citations were in the right format. *Numbering things, making sure data is in the right format* - sounds like something a *computer* would be good at.

Turns out there is software to do precisely this, and it's been around for 20 years: it's called LaTex.

## Bold, Italic

```latex
The link between \textit{consumer choice} and political freedom is especially pronounced in the 1980s
```

```latex
The link between \textit{consumer choice} and political freedom is especially pronounced in the 1980s
```

## Images

```latex
\begin{figure}[h]
    \includegraphics[width=\textwidth]{./images/die-neue-wohnung-web.jpg}
    \caption{Video stills from 'The New Dwelling' ['Die Neue Wohnung'], a 1930 film showing the benefits of modernist housing}
    \label{fig:universe}
  \end{figure}
```

```h``` is a label that controls where in the document the figure will show up. ```h``` will put it where it appears in the source document. ```ht``` puts it at the top of the page. There's loads of other options

## Sections

```latex
\section{Section Title}
\subsection{Sub Section Title}
```

## Citations

All your references go in a seperate file in this format:

```latex
@online{wilder,
    author = "Charly Wilder",
    year = "2016",
    institution = "The New York Times",
    note = "Accessed Nov. 14, 2017",
    title = "On the Bauhaus Trail in Germany",
    url = "https://www.nytimes.com/2016/08/14/travel/bauhaus-germany-art-design.html"
}
```

This lets you keep a more information than will eventually end up in the bibliography, ie. the author's full name. In your actual text document, you *reference* entries in your bibliography file like this:

```latex
In a country still struggling to recover from the First World War, with violent revolutions going on in Europe and new technology changing every aspect of life, change seemed inevitable. \autocite{wilder}
```

```latex
Popular critics such as \textcite{wolfe} criticise modernist housing as being overly academic and fundamentally unfit for its purpose. 
```

Again, there are many more options

LaTeX is going to pull in any information it needs to do a correct citation from the bibliography style. This means you can easily change your citation format if you need to - since we've *seperated data from presentation*, we can recompile the document in a different format at any point. 

## Front Matter

Since we've given LaTeX all sorts of information about our document, we can do neat things like this:

```latex
\begin{titlepage}
    \maketitle
\end{titlepage}
```

```latex
\tableofcontents
```

```latex
\listoffigures
```

## Headers and Footers

```latex
 \pagestyle{fancy}
   \fancyhf{}
   \fancyhead[LE,RO]{\nouppercase{\leftmark}}
   \fancyfoot[LE,RO]{\thepage}
```