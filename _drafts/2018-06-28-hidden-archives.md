---
layout: post
title:  "Hidden Archives"
date: 2018-06-27 10:00:00
tags: ""
thumb: ""
intro: "I've been making websites for people for a while, but I've never found a satisfying way to show that work on my portfolio."
---

# Hidden Archives: Machine Learning Datasets as Cultural Artifacts and Agents of Power

Machine learning algorithms power an increasing share of our daily experience. Thanks to them, machines can understand language **[Res18]**, make phone calls **[LM18]**, recognise faces **[Tai+14]**, control our newsfeeds **[Dun16]** and make medical diagnoses **[Orc15]**.
These tasks are difficult to solve using traditional programming methods because of their complexity — even a seemingly simple task such as understanding a spoken sentence requires a deep understanding of grammar, vocabulary and context. If you add to that information from the speaker’s body language, cultural context, background noise, you end up with an algorithm that is so complicated it becomes impossible for engineers to work with. 

Machine learning models excel at these complex tasks because they effectively automate traditional programming. Instead of writing complex algorithms ourselves, we feed the machine examples of what we want it it do, and let it find a way of accomplishing our goal. An example often used in undergraduate education can help illustrate this:

## A machine learning primer

Suppose we were building a model to tell photos of cats and dogs apart — maybe to identify pet owners on our social network. First, we would need to obtain a training set of correctly-labelled example images. This might mean tapping into some existing database, or creating a new one by labelling images by hand. We then train a model on those examples—we let the machine create a set of mathematical rules that allow it to distinguish between cats and dogs. The model arrives at these rules through an iterative process—it might take days or weeks for it to arrive at a satisfying result.

Crucially, we don’t know the rules the machine is coming up with—it could be looking at shapes, colours, textures or some other criteria that would never occur to us. Our cat v. dog classifier is essentially a black box algorithm. We can control its inputs and measure its results, but (in contrast to traditional programming) there’s no easy way for us to understand what goes on in between.

The defining factor that has led to the rise of machine learning isn’t some theoretical breakthrough - it’s that researchers, corporations and governments have suddenly gained access to vast amounts of training data - hidden archives of images, videos, speech, behaviour patterns. These archives, in the form of machine learning algorithms, power many of the systems that shape our daily reality.

## Training Data

A critique of these systems should start at the training data. Biased, skewed or manipulated training data will produce models with the same qualities, as accounts of racist and sexist algorithms illustrate. However, the data is often inaccessible from public scrutiny for a number of reasons. Burrell describes describes three factors that contribute to the opacity of machine learning algorithms generally: corporate or state secrecy, technical illiteracy, and inherent complexity of modern algorithms. These factors also apply to the training data behind those algorithms.

The first layer of opacity, according to Burrell, is caused by companies and governments trying to maintain a competitive advantage against competitors or political adversaries respectively. She describes how algorithms like Google’s Pagerank are closely guarded, even within the company. Interestingly, companies seem to be happier to share details about their machine learning models: Facebook published a detailed paper on DeepFace, its immensely powerful facial recognition model in 2016 **[Tai+14]**, and during this writing Google published a similar article on their (uncanny) advances in speech synthesis **[LM18]**. Similar studies are regularly published by Airbnb, Twitter and others. However, in all these cases the data used to train the models — an archive of four million portraits in the case of Facebook, an unnamed ‘corpus of anonymized phone conversation data’ in the case of Google and a database of detailed user behaviour at Twitter — remains hidden **[KA17]**.

A secondary layer of opacity comes from a lack of technical literacy in the population. Burrell writes:
> ...at present, writing (and reading) code and the design of algorithms is a specialized skill. It remains inaccessible to the majority of the population. [...] Writing for the computational device demands a special exactness, formality, and completeness that communication via human languages does not.

Looking at training data, instead of the code used to process it, might address some of this. Training data comes in the form of images, videos and speech - the stuff our brains are naturally good at processing. Where reading code requires ‘exactness, formality and completeness’, looking at images requires subtlety, judgement and experience. In the analysis of training data we are, as it were, on home turf. 

Of course this quickly falls apart when we take data like Twitter’s user behaviour database into account. If we could get access to that database, we would likely face the same problems Burrell describes — without specialised knowledge, we’d be staring at a wall of incomprehensible numbers and symbols. 
We can imagine how these first two layers might be addressed through policy: Regulation could force companies to open their algorithms and datasets to public scrutiny, while public education might give people the tools to understand and critique the systems that affect their daily lives. The third layer of algorithmic opacity is much harder to dissolve, as Burrell goes on to explain: 

>There are certain challenges of scale and complexity that are distinctive to machine learning algorithms. These challenges relate not simply to total number of lines or pages of code, the number of team members on the engineering team, and the multitude of interlinkages between modules or subroutines. These are challenges not just of reading and comprehending code, but being able to understand the algorithm in action, operating on data. Though a machine learning algorithm can be implemented simply in such a way that its logic is almost fully comprehensible, in practice, such an instance is unlikely to be particularly useful. Machine learning models that prove useful [...] possess a degree of unavoidable complexity.

Contemporary machine learning datasets have similar inherent issues of scale and complexity. Some of these archives are simply too large for any one person to survey, let alone to draw meaningful conclusions from.

To look at every image in the Open Images Dataset, read every email in the Enron Corpus, or watch every video in Youtube8M would take months, years and decades respectively. As researchers call for even bigger datasets **[HNP09]**, a larger fraction of that will move beyond our horizon. Our only way to map these archives might be through tools like statistical analysis, keyword searches and indeed machine learning models themselves.

## Cultural Artifacts

The basic premise of machine learning, as illustrated in our cat v. dog model, is generalisation: Let’s look at a small training set to learn rules we can then apply to a potentially much larger number of instances in the real world. In our example, we may have used a set of a few thousand images to infer rules that would apply to potentially millions of pet photographs.
However, looking at these archives one datapoint at a time also reveals very specific details about the people, places, and objects recorded in them.

Let’s look, for instance, at the feret database, an archive of photographic portraits commissioned by the u.s. military in 1994 to help with the development of facial recognition algorithms **[PRD96]**. The stated goal of this database is to provide reference material for facial features, but it also documents the demographic makeup and organisational hierarchy of the university that carried out the experiment. Unsurprisingly for a computer science department in the early 1990s, and overwhelming majority of subjects are white and Asian men. Most are clearly students — dressed casually and wearing id badges on silver chains. There are two police officers, easily identified by their grey uniforms. Then there is a group of what appears to be faculty, dressed in shirts and blazers. Some members of this group are photographed wearing lab-coats, indicating perhaps some special role in the experiment. A yet smaller group, identified by id badges clipped to their collars, are members of the Army Research Laboratory, which commissioned the project. Their badges come in red, yellow and green — perhaps indicating different levels of security clearance? 

We can draw similar cultural meta-data from the Switchboard Corpus — a dataset of thousands of transcribed phone conversations, commissioned by the u.s. Department of Defense in 1991 **[GH93]**. The aim of the project was help with the development of speech recognition software by creating a training set of natural human conversations.

But if we start reading the conversations in the dataset one by one, we can get an idea about a subset of American society in January 1991 — which political issues people were worried about at the time, what they thought about the emergence of technology, what their personal lives were like. One man, identified only by a seven-digit code shares his reservations about the cd-rom:

> Now I know another reason why I’m not going to get a CD player for a while. You can’t record on them and so they won’t be as functional as like a cassette player, where if you heard something, you could record it. But, but I’m satisfied to just have what I’ve been used to, not have to think about the great financial sacrifice that that would be, to suddenly try to switch over to all CDs or something.

Another gives his views on immigration, mirroring contemporary anti-immigrant sentiments:

>You feel like almost they’re, they’re invading us to the point where they’re going to take over. And I was born in Ohio and there is, there are a lot of Mexican people here because we’re so close to the border, and it’s kind of scary.

Reading through the Switchboard Corpus raises reveals many conversations snippets like these. Some are incredibly mundane, while others raise questions about the kinds of biases machines could potentially learn from them.

## Collection

It is worth looking beyond the content of a given dataset and examining how it was collected. In some cases, we can find traces of the collection process in the dataset itself. Switchboard, for instance, contains multiple instances of people talking discussing their interactions with the computer conducting the experiment. Some conversations are cut off abruptly — evidence of the Robotoperator stopping the recording at a predetermined timestamp. In addition to this, the written documentation surrounding these datasets — papers, technical manuals, patents — can tell us about the circumstances in which they were collected.

The earliest datasets come directly from the researchers working on a particular algorithm. The AT&T Database of Faces, collected at Cambridge University in 1992 is an example of this. It contains images of 40 individuals (a miniscule number by contemporary standards), likely all students and faculty of the Cambridge engineering department.

Around the same time, we start to see dedicated, government-funded collection efforts. feret and Switchboard both belong to this group. The researchers working on Switchboard spent months recruiting paid volunteers, sourcing telephone infrastructure and developing detailed guidelines for the project. Professional court reporters had to be hired to transcribe the audio tapes and enter the conversations into the database, which was finally sent out to researchers on 27 cds. Collecting the feret database was a similar effort - volunteers had to be recruited, analogue data (photographic negatives in this case) translated into a machine-readable format, and the final product distributed by post. 

The emergence of social media fundamentally changes this fundamentally. Suddenly, the primary data collection effort — taking photographs, recording video, having conversations, recording one’s interests, moving around physical and digital spaces — shifts from government-funded researchers and paid volunteers to the general population. Researchers simply ‘harvest’ that data using developer-friendly apis . They are helped by the fact that there are no more audio tapes to transcribe or negatives to scan. Photographs, videos and conversations are created in a machine-readable format from the very beginning. 

This represents a significant change in visual culture, as Paglen (2016) describes:
> What’s truly revolutionary about the advent of digital images is the fact that they are fundamentally machine-readable: they can only be seen by humans in special circumstances and for short periods of time. A photograph shot on a phone creates a machine-readable file that does not reflect light in such a way as to be perceptible to a human eye. A secondary application, like a software-based photo viewer paired with a liquid crystal display and backlight may create something that a human can look at, but the image only appears to human eyes temporarily before reverting back to its immaterial machine form when the phone is put away or the display is turned off. However, the image doesn’t need to be turned into human-readable form in order for a machine to do something with it. This is fundamentally different than a roll of undeveloped film.

While the collection of training data has been outsourced to all of us, the benefits of the resulting machine learning models have arguably become more centralised. The most powerful systems for facial recognition, speech synthesis and medical diagnostics are being developed to generate economic value for Facebook, Google and ibm. 

Crucially, most of us are unaware that by publishing and consuming content online, we’re constantly generating training data (and by extension, tremendous economic value). Technology companies use deliberately analogue metaphors to distract from this. We share photos in ‘albums’ and ‘slideshows’, creating the impression that the act of sharing a photo on Facebook isn’t fundamentally from sharing it in real life. But the metaphor is misleading, as Paglen continues:

> Something completely different happens when you share a picture on Facebook than when you bore your neighbors with projected slide shows. When you put an image on Facebook or other social media, you’re feeding an array of immensely powerful artificial intelligence systems information about how to identify people and how to recognize places and objects, habits and preferences, race, class, and gender identifications, economic statuses, and much more.

## Datasets as Agents of Power

Beyond their economic value, machine learning datasets have the potential to influence our lives in very tangible ways. Banks and insurance companies use machine learning algorithms to decide who might be a worthy customer. The same computer vision models that identify our friends in holiday photos are used by Chinese police to identify journalists and dissidents on public transport **[Lia18]**.

This is especially problematic when historical biases are encoded in training data, and self-reinforcing cycles are easy to fall into. Reports of facial recognition models failing to identify women and people of colour suggest that this is already happening.

An immediate answer to this might be to simply collect more data - a larger dataset, so the thought goes, should represent the population more accurately and therefore lead to a fairer model. But research suggests this isn’t necessarily the case. Even a model trained on billions of randomly selected websites inherits historical biases with disturbing accuracy **[CBN17]**.

Perhaps it is useful to see the notion of governments and corporations embracing machine learning datasets as the latest instance of a long tradition of archives being used as instruments of power.

Okwui Enwezor (2008) traces this tradition back to British imperialism. To establish an archive, he argues, is to establish power:

> Induced into a fever of knowledge accumulation and intelligence gathering, the Victorian archival industry began a process whereby information concerning the known world was synchronized and unified. With the establishment of institutions such as the Royal Geographical Society, the Royal Photographic Society, the British Museum, and the Colonial Office, Victorian Britain initiated one of the most prodigious archive-making periods in modern history. Although it was an empire of vast territories, patrolled by mighty naval fleets and army regiments, imperial Britain was above all founded on the production of paper, assorted documents, and images, all of which spawned other documents, along with the systems organizing them and the rules for distributing their content. [...] Constructing these ‘paradigms of knowledge seemed to solve the problem of imperial control at a distance.’

He draws a long line of governments assembling, doctoring and strategically deploying archives to make whatever make political goals seem like the inevitable result of an ‘objective’ process.

> Let us recall another episode in that spectacle of archival disinformation: when then–U.S. Secretary of State Colin Powell announced that a document obtained by British intelligence and in the possession of American officials showed indisputably that the Iraqi regime was actively seeking to buy ‘yellow cake’ uranium from the African nation of Niger. The document supporting Powell’s claim was soon revealed to be a forgery, the ‘pure fantasy’ of an intelligence agent. In this story of archives and counter-archives, are we not reminded of how deeply embedded the processes of archival production are in the modern state form? For the gathering and interpretation of intelligence—more accurately, data—are nothing more than the obsessive principle of archival formation.

Perhaps this historical perspective can help us deal with the present rise of machine learning datasets in a more informed way. Enwezor’s critique of the supposed ‘neutrality’ and ‘objectivity’ of the archive seems especially pertinent in the discussion of machine learning. It’s a sentiment that seems ingrained in the very language we use to talk about machine learning algorithms — not as pieces of digital infrastructure deployed to exert power and generate profit, but as almost mythical creatures that see, learn, remember, dream and even hallucinate.

Ian Bogost warns against this mythologisation of the algorithm in ‘The Cathedral of Computation’:

>when left unseen, we are able to invent a transcendental ideal for the algorithm. The canonical algorithm is not just a model sequence but a concise and efficient one. In its ideological, mythic incarnation, the ideal algorithm is thought to be some flawless little trifle of lithe computer code, processing data into tapestry like a robotic silkworm. A perfect flower, elegant and pristine, simple and singular. A thing you can hold in your palm and caress. A beautiful thing. A divine one. But just as the machine metaphor gives us a distorted view of automated manufacture as prime mover, so the algorithmic metaphor gives us a distorted, theological view of computational action. 

This attitude is dangerous because it makes any social consequences of algorithms seem inevitable, beyond the control of those who deployed the algorithm. This is in many ways analogous to Enwezor’s critique of the archive.

The way to break this theocratic view of the algorithm (and indeed, the archive) according to Bogost, is to ‘bring them down to earth again’. Perhaps looking at the datasets behind the algorithms, realising they are not some divine creation but the result of tedious labour, potentially biased and full of idiosyncrasies could be a step in this direction X

## References
<div class='full masonry-2' markdown='1'>
- **PRD96**	P. Jonathon Phillips, Patrick J. Rauss, and Sandor Z. Der. FERET (Face Recognition Technology) Recognition Algorithm Development and Test Results. 1996.
- **BB01**	Michele Banko and Eric Brill. Scaling to Very Very Large Corpora for Natural Language Disambiguation. In: Proceedings of the 39th annual meeting of the Association for Computational Linguistics. 2001, pp. 26–33.
- **GH93**	John Godfrey and Edward Holliman. Switchboard-1 Release 2 LDC97S62. 1993. catalog.ldc.upenn.edu/ldc97s62
- **HNP09**	Alon Halevy, Peter Norvig, and Fernando Pereira.
The unreasonable effectiveness of data. In: IEEE Intelligent Systems 24.2 (2009),pp. 8–12.
- **Leb13**	Jessica Leber. The Immortal Life of the Enron E-mails. 2013. technologyreview.com/s/515801/the-immortal-life-of-the-enron-e-mails
- **Tai+14** Yaniv Taigman et al. DeepFace: Closing the Gap to Human-Level Performance in Face Verification.
In: Facebook AI Research (2014)
research.fb.com/wp-content/uploads/2016/11/deepface-closing-the-gap-to-human-level-performance-in-face-verification.pdf
- **Bog15**	Ian Bogost. The Cathedral of Computation. 2015.
theatlantic.com/technology/archive/2015/01/the-cathedral-of-computation/384300/.
- **Orc15**	Mike Orcutt. Why IBM Just Bought Billions of Medical Images for Watson to Look At. 2015.
technologyreview.com/s/540141/why-ibm-just-bought-billions-of-medical-images-for-watson-to-look-at
- **Abu+16**	Sami Abu-El-Haija et al. YouTube-8M: A Large-Scale Video Classification Benchmark. In:CoRRabs/1609.08675 (2016). 
arxiv.org/abs/1609.08675
- **Bur16**	Jenna Burrell. How the machine ‘thinks’: Understanding opacity in machine learning algorithms.
In: Big Data Society (2016).
journals.sagepub.com/doi/10.1177/2053951715622512
- **Dun16**	Jeffrey Dunn. Introducing FBLearner Flow: Facebook’s AI backbone. 2016.
code.facebook.com/posts/1072626246134461/introducing-fblearner-flow-facebook-s-ai-backbone/
- **Pag16**	Trevor Paglen. Your Images are Looking at You. 2016. thenewinquiry.com/invisible-images-your-pictures-are-looking-at-you/.
- **CBN17**	Aylin Caliskan, Joanna J. Bryson, and Arvind Narayanan. Semantics derived automatically from language corpora contain human-like biases. In: Science 356.6334 (2017), pp. 183–186.issn: 0036-8075. doi: 10.1126/science.aal4230.
science.sciencemag.org/content/356/6334/183.
- **Ger17**	A. Geron. Hands-on Machine Learning with Scikit-Learn and TensorFlow O’Reilly Media, 2017. ISBN 9781491962299
books.google.co.uk/books?id=I6qkDAEACAAJ.
- **Kra+17**	Ivan Krasin et al. OpenImages: A public dataset for largescale multi-label and multi-class image classification. (2017) storage.googleapis.com/openimages/web/index.html
- **LM18**	Yaniv Leviathan and Yossi Matias. Google Duplex: An AI Systemfor Accomplishing Real-World Tasks Over the Phone. 2018.
ai.googleblog.com/2018/05/duplex-ai-system-for-natural-conversation.html
- **Lia18**	Shannon Liao. Chinese police are expanding facial recognition sunglasses program. 2018.
theverge.com/2018/3/12/17110636/china-police-facial-recognition-sunglasses-surveillance
- **Loh18**	Steve Lohr. Facial Recognition Is Accurate, if You’re a White Guy. The New York Times, 2018.
nytimes.com/2018/02/09/technology/facial-recognition-race-artificial-intelligence.html
- **Res18**	Mozilla Research. Speech Machine Learning. 2018.
research.mozilla.org/machine-learning
- **Enw18**	Okwui Enwezor. Archive Fever: Photography between History and the Monument. In: Archive Fever: Uses of the Document in Contemporary Art. International Center of Photography, 2018. 
- **KA17**	Nicolas Koumchatzky and Anton Andryeyev. Using Deep Learning at Scale in Twitter’s Timelines. 2017
blog.twitter.com/engineering/en_us/topics/insights/2017/using-deep-learning-at-scale-in-twitters-timelines.html
</div>