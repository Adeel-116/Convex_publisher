import ServiceImage from "../assets/service.webp"
import ghostServiceImage from "../assets/ghost-writing-service.png";
import editingServiceImage from "../assets/editing-service-image.png"
import proofreadingServiceImage from "../assets/proof-reading-service.png"
import audioBookServiceImage from "../assets/audio-book-service.png"
import blogWritingServiceImage from "../assets/blog-writing-service.png"
import websiteWritingServiceImage from "../assets/website-content-writing-service.png"
import bookCoverDesign from "../assets/book-covers-service.png"
import bookPromotingImage from "../assets/book-promoting-service.webp"
import bookFormattingImage from "../assets/formating-service.png"
import ebookImage from "../assets/ebook-writing-service.png"
import bookVideoImage from "../assets/book-video-trailer-service.png"
import authorWebsiteImage from "../assets/author-website-service.png"
import articleWritingImage from "../assets/article-writing-service.png"
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png"; 
import icon3 from "../assets/icon3.png"; 


const globalData = {
  homePageContent: {
    heroSection: {
      herotitle: "Expert Book Publishing Services",
      heroHeading: "Publishing Your Precious Work – Convex Book Publishers",
      heroParagraph: "If you are finding it tough to publish your work by yourself, or if you are not getting any approval from publishers, do not worry. Convex Book Publishers can help you with your publishing work. We work with main publishing houses so can get the right publishing strategy for new writers."
    },
    publishingJourney: {
      heading: "A Unique Publishing Process For Your Book",
      paragraph: "Book Publishing Services has experience working with top writers and has published many bestsellers with major publishing houses. We are involved in publishing, printing, distribution, and marketing. Our team is proud to say that we have helped authors become personal brands. Whether you want to self-publish or pursue traditional publishing, we can assist you.",
      image: ServiceImage,
    },
    CTA: {
      title: "Stopping The Stresses Of Book Publication",
      heading: "Take Advantage Of An Expert Plan For Publication With Convex Book Publisher",
    },
    ourPublishingProcess: {
      heading: "Our Publication Process",
      steps: [
        {
          title: 'Submit Draft',
          description:
            'Our team will evaluate your draft when you submit it, and asks the clients for all relevant details, such a publishing as well as printing needs.',
        },
        {
          title: 'Final Editing Process',
          description:
            'The team then reviews your draft to check for final edits. Here they carry out analysis and proofreading.',
        },
        {
          title: 'Typesetting Plus Illustrations',
          description:
            'When the draft has been edited, the team chooses the font, layout, table of contents, spacing plus images and illustrations if needed.',
        },
        {
          title: 'Designing Phase',
          description:
            'The designing process then occurs where the front and back covers of the book get designed. This including the author bio.',
        },
        {
          title: 'Publication Plus Distribution',
          description:
            'When the edits and designs get approved, the manuscript will be submitted in the clients desired format for publication across various platforms.',
        },
      ]
    },
    letBeginsCTA: {
      heading: "Let’s Begin",
      paragraph: "We are a ghostwriting and Publication company, providing a range of book services to help make the work of writers easier. Contact us today to find out more!",
    }
  },

  ghostwritingContent: {
    heroSection: {
      herotitle: "Professional Ghostwriter For You",
      heroHeading: "Words That Connect With What The Reader Wants",
      heroParagraph: "Our team includes creative professionals who can help you become the popular author that you want to be. Our team helps many in this industry, provide a voice to their words, and make characters which intrigue readers."
    },
    publishingJourney: {
      heading: "Signup For The Ghost Book Writing Services With Convex Book Publishers",
      paragraph: "Are you looking for a professional Ghost book writer? We are here for you to be heard by the world. The ghost book writers at Convex Book Publishers are experts and have the creative knowledge to make interesting stories. We are proud to boast about our uniqueness and ingenuity. It is our mission to continually enhance our book ghostwriting services so that our clientele will be satisfied.",
      image: ghostServiceImage,
    },
    CTA: {
      title: "Develop Top Ideas With Us!",
      heading: "Choose One Of Our Ghost Book Writers To Let The World Know About Your Story",
    },
    
    ourApproach: {
      heading: "Our Approach For Ghost book writing Is A Consistent One For More Efficiency",
      Data:[
        {
          image: icon1,
          title: "Top Native Writers",
          description: "With Convex Book Publishers, you will work with native speaking writers who know the language and have much experience."
        },
        {
          image: icon2,
          title: "Confirmed Results",
          description: "We know the vitality of establishing oneself like an author therefore we make certain that everything we write, is what you actually want written."
        },
        {
          image: icon3,
          title: "Personalized Process",
          description: "We know that all stories are different therefore they are all important to us. A personal process is adapted to every story."
        }
      ]
    },
    ourPublishingProcess: {
      heading: "How We Work",
      steps: [
        {
          title: 'Creating Draft & Outline',
          description:
            'We start by comprehending your idea and then create a detailed outline of the plot.',
        },
        {
          title: 'Researching & Writing',
          description:
            'When you approve the outline, we start the writing procedure after carefully brainstorming and researching with you.',
        },
        {
          title: 'Editing & Review',
          description:
            'We carry out a review assessment and then our editing team checks for any corrections in the work.',
        },
        {
          title: 'Formatting & Designing Work',
          description:
            'When there are no errors in the manuscript, we format the book and design it so that publication can occur.',
        },
        {
          title: 'Marketing',
          description:
            'When published, we create a marketing plan which is carried out to attract people and let them know about your book.',
        },
      ]
    },
    letBeginsCTA: {
      heading: "Link With A Ghost Writer Now!",
      paragraph: "You are so close to becoming a top author. Come brainstorm with us and make your story come real!",
    }
  },

  editingContent: {
    heroSection: {
      herotitle: "Expert Editing Services",
      heroHeading: "No Work Is Complete Without An Editorial Review At Convex Book Publishers",
      heroParagraph: "It is possible for top authors to even miss out on small edits. This is why an editorial process is needed to fix the corrections and mistakes. We have a team of professional editors who will take care of the editorial part of your publications."
    },
    publishingJourney: {
      heading: "Cost-Effectively And Fast Editing Results",
      paragraph: "All writers, be them experts or beginners are likely to make some editing mistakes. Editors at Convex Book Publishers know that these mistakes are inevitable therefore they aim to always fix these for you.",
      image: editingServiceImage,
    },
    CTA: {
      title: "Oh No! Ignoring Errors?",
      heading: "Send Your Draft To A Professional Editor",
    },

    ourApproach: {
      heading: "Deep Editing Services To Make Uncompleted Drafts Perfect",
      Data:[
        {
          image: icon1,
          title: "Editorial Analysis",
          description: "We start by reviewing the manuscript to check for edits and revisions if they are needed."
        },
        {
          image: icon2,
          title: "Figuring Out Type Of Editing",
          description: "Our team then completes the editing needed, including developmental, line by line, and proofreading amongst other work."
        },
        {
          image: icon3,
          title: "Editing Part",
          description: "The editing team then starts the editing procedure, carefully taking the manuscript apart some times to make certain that there are no errors."
        }
      ]
    },

    ourPublishingProcess: {
      heading: "Our Procedure",
      steps: [
        {
          title: 'Sending Draft To Us',
          description:
            'The first assessment occurs at the time that the client submits the drafts asking for edits.',
        },
        {
          title: 'Initial Editing Part',
          description:
            'The team suggests alterations, gives comments connected to making the story better, and sends the drafts to the client for approval.',
        },
        {
          title: 'Secondary Editing Part',
          description:
            'The team then does an advanced editing of the manuscript, and makes alterations according to what the client has advised.',
        },
        {
          title: 'Proofreading',
          description:
            'A final check now occurs where the team proofreads and edits all the work carefully.',
        },
        {
          title: 'End Stage',
          description:
            'When edits have been completed, the draft gets finalized and is sent to the client to approve.',
        },
      ]
    },
    letBeginsCTA: {
      heading: "Get The Best Editor For Your Books!",
      paragraph: "Authors not sure about the quality of content can get help of our editors so that an assessment and editing of your draft can occur.",
    },
  },

  proofReadingContent: {
    heroSection: {
      herotitle: "Choosing The Correct Words",
      heroHeading: "Aiming for Brevity and making sure content is of quality!",
      heroParagraph: "Our creative professionals check your writing with a new perspective so that an accurate review can occur to fix any mistakes."
    },
    publishingJourney: {
      heading: "Cost-Effectively And Fast Editing Results",
      paragraph: "All writers, be them experts or beginners are likely to make some editing mistakes. Editors at Convex Book Publishers know that these mistakes are inevitable therefore they aim to always fix these for you.",
      image: proofreadingServiceImage,
    },
    CTA: {
      title: "Generate Perfect Drafts",
      heading: "With A Fresh Perspective, Accuracy In Writing Can Be Guaranteed.",
    },
    ourApproach: {
      heading: "Proofreading And Copyediting Occurs Deeply At Convex Book Publishers",
      Data:[
        {
          image: icon1,
          title: "Expert Proofreaders",
          description: "Our expert editors are careful in their editing and proofreading activities for different genres; their experience has shown that they are indeed professional in this field."
        },
        {
          image: icon2,
          title: "Lean Writing",
          description: "The team concentrates on lean writing as it is what they excel in; they get rid of wordy sentences, confusing content, grammar errors, and rephrase properly so that reading can occur easily."
        },
        {
          image: icon3,
          title: "Professional Quality",
          description: "The editing team then starts the editing procedure, carefully taking the manuscript apart some times to make certain that there are no errors."
        }
      ]
    },

    ourPublishingProcess: {
      heading: "Our Procedure",
      steps: [
        {
          title: 'Drafting Submission',
          description:
            'We ask for draft submission and forward it to the editorial team for an initial editing review.',
        },
        {
          title: 'Review Plus Suggestions',
          description:
            'The proofreading team carefully reviews the draft to suggest content improvements and perform preliminary editing.',
        },
        {
          title: 'Correction of Mistakes',
          description:
            'The team fixes grammar, punctuation, and reduces wordiness to ensure smooth readability.',
        },
        {
          title: 'Use of Software',
          description:
            'The file is scanned using tools like Grammarly to eliminate any remaining human errors.',
        },
        {
          title: 'Completing Draft',
          description:
            'After proofreading, the document is finalized and prepared for client approval and delivery.',
        },
      ]
    },
    letBeginsCTA: {
      heading: "Achieve A Fresh Perspective On The Draft",
      paragraph: "Authors not sure about the quality of content can get help of our editors so that an assessment and editing of your draft can occurIt is a good idea to give your writing to an editor to fix. They will look at the draft objectively and proofread for errors which can be missed at the time of writing.",
    },
  },

  audioBookContent: {
    heroSection: {
      herotitle: "Connect, Link, And Influence",
      heroHeading: "Expert Audiobooks According To What People Want!",
      heroParagraph: "Convex Book Publishers can help make your books reach book readers clubs’, by creating top class audiobooks. Let’s make your work become an audiobook prefect for today’s digital world."
    },
    publishingJourney: {
      heading: "Creating Audiobooks That Are Perfect",
      paragraph: "Audiobooks provide convenience to many readers who are usually on the go. Our team offers professional Audiobook services to give you a seamless listening experience. They know how to work with high-tech technologies to create the best audiobook.",
      image: audioBookServiceImage,
    },
    CTA: {
      title: "Get Your Book Narrated",
      heading: "Our Professional Audiobook Service Gives Your Story The Voice It Needs.",
    },
    ourApproach: {
      heading: "We Aim To Produce Audiobooks That Add Value To Your Stories",
      Data:[
        {
          image: icon1,
          title: "Quality Listening Experience",
          description: "In today’s digital world of readers who want everything online, audiobooks provide a good reading experience always."
        },
        {
          image: icon2,
          title: "Professional Audiobook Publishing",
          description: "Authors who wish to be the voice of the stories they write, our team has the best plan to create and publish your audiobooks."
        },
        {
          image: icon3,
          title: "Far Reach",
          description: "With a good audiobook, your book can be present on many non-eBook platforms, such as your website, Spotify, etc."
        }
      ]
    },
    letBeginsCTA: {
      heading: "Get Custom Audiobook Publishing!",
      paragraph: "Our production team knows what they are doing and uses innovative procedures to make the best audiobooks. Contact us today as we specialize in not just creating but publishing your audiobooks!",
    },
  },

  blogWritingContent: {
    heroSection: {
      heroHeading: "Finding A Blog Writer Who Knows What You Want Matters",
      heroParagraph: "Are you looking for a top blog writing service? Convex Book Publishers has a team of experts who know how to write blogs and can give you the engaging and valid content that your target audience will be drawn to."
    },
    publishingJourney: {
      heading: "It Is Not Easy To Engage The Audience That Matters.",
      paragraph: "In today’s competitive environment, blogs have become important. These are able to help one target their audience correctly. The right blogs can make your preferred audience notice what you are saying. Research-oriented blogging can attract the audience, allowing this to become a masterpiece. Our team of inspirational blog writers will be assigned according to your particular blog requirements.",
      image: blogWritingServiceImage,
    },
    CTA: {
      title: "Is It Tough Finding A Professional Blog Writer?",
      heading: "Get The Help Of Experienced Blog Writers Who Can Market Your Article!",
    },
    ourApproach: {
      heading : "An Easy Way To Get The Right Blog",
      Data:[
        {
          image: icon1,
          title: "You Have Found The Right Writer",
          description: "Convex Book Publishers ends your search for a professional writer to write your blog for you. We have a team of blog writers who have the experience when it comes to many subject matters which are important to you."
        },
        {
          image: icon2,
          title: "Nonstop Revision",
          description: "Only when you give us the signal will we proceed further on your task. We will provide you with unlimited revision so that your article is exactly how you want it to be."
        },
        {
          image: icon3,
          title: "Money-Back Guarantee",
          description: "You can order from us with confidence because all our blog plans have a money-back guarantee and that without asking you any questions."
        }
      ]
    },

    letBeginsCTA: {
      heading: "Do You Wish Your Book To Become Popular?",
      paragraph: "We have a team of professionals who are willing to do this for you. Our company is a Ghostwriting and book publishing one that can give you what you want.",
    },
  },

  websiteWritingContent: {
    heroSection: {
      heroHeading: "Engaging And Professional Website Content Writing That You Need",
      heroParagraph: "If you are looking for someone to keep care of your website by updating it often, you have come to the right place. Your audience wants to see new content on your website even if you are an established author. Our team at Convex Book Publishers knows your needs and will provide you with expert writing and that at a reasonable price. Let us handle your website’s content for you."
    },
    publishingJourney: {
      heading: "Sometimes Getting Help Can Be What You Need",
      paragraph: "As time passes, your website can become a place that your visitors like to visit. Our team of professionals can help draw the eyes of those who matter to your website and let them stay there. The amount of traffic which your website gets shows the demand for your service. This is why you should hire top specialists to make your website’s content better allowing it to be professional.",
      image: websiteWritingServiceImage,
    },
    CTA: {
      title: "Are You Finding It Difficult Looking For A Professional Web Copy Writer?",
      heading: "You Have Found A Top Website Content Writer.",
    },
    ourApproach: {
      heading: "Choose Professional Content Writers From A Top Writing Company",
      Data:[
        {
          image: icon1,
          title: "Simple To Use",
          description: "We will help you select the best authors who can give you the work you need instead of wasting your time choosing between many freelances. Simply state what you want and we will proceed."
        },
        {
          image: icon2,
          title: "Quick Turnaround",
          description: "We regard speed as important therefore the orders on our marketplace are done fast. It does not matter what you need, our team will be there for you."
        },
        {
          image: icon3,
          title: "Expert Quality",
          description: "We carry out a quality assessment on our platform before sending any order out. The authors who do great get encouraged. This makes our authors want to create high-quality work which will meet your needs."
        }
      ]
    },

    letBeginsCTA: {
      heading: "Wish To Make Your Book Be Known?",
      paragraph: "Convex Book Publishers can complete your work without any stress. We will give you the book writing and publishing services you require.",
    },
  },


  bookCoverContent: {
    heroSection: {
      herotitle: "Attractive Book Cover Design And Formatting",
      heroHeading: "Your Book Cover Will Stand Out On Any Bookshelf",
      heroParagraph: "Convex Book Publishers gives you excellent books covers for your book. Our professional team of experienced designers can make amazing graphics intermingling images, concepts, as well as typography allowing you to have a unique book cover."
    },
    publishingJourney: {
      heading: "Unique Book Cover Designs That Attract",
      paragraph: "Writing a book is no easy task. It does not matter which genre it is, Convex Book Publishers knows that you have spent much time writing the book. Therefore it is vital that it has the book cover which is perfect for it.",
      image: bookCoverDesign,
    },
    CTA: {
      title: "Is It Tough Selling Out Your Books?",
      heading: "Our Marketing Professionals Can Make Your Book Be Prominent",
    },

    ourApproach: {
      heading: "It Is Our Duty To Give You Top Book Covers",
      Data:[
        {
          image: icon1,
          title: "Professional Designers",
          description: "Convex Book Publishers has experience in making attractive book cover designs. These are designed according to what your audience will be drawn to allowing your book to get the attention it deserves."
        },
        {
          image: icon2,
          title: "Ready-To-Go Files",
          description: "The book cover that you will get will be in top production-ready files. You can give it to your publisher or printer. You will have complete ownership of the book cover design."
        },
        {
          image: icon3,
          title: "Guarantee To Be Satisfied",
          description: "We are with you on your book creation journey. We will help solve the problems you have. We provide a 100% money-back guarantee for those who are not satisfied with the work."
        }
      ]
    },


    letBeginsCTA: {
      heading: "Get Attractive Book Cover For Your Book",
      paragraph: "Our designing team can help you get the perfect book cover. Convex Book Publishers has the book cover designs you need.",
    },
  },

  bookPromotingContent: {
    heroSection: {
      title: "Get Known As An Author With Our Marketing Services",
      heroHeading: "Professional Book Marketing Services To Let You Be Known In The Writing Community",
      heroParagraph: "It is tough to get known as an author that writes good books. This is where Convex Book Publishers comes in. We have the top digital marketing professionals to get you the platform you need. We will make certain that your book reaches the hands of readers."
    },
    publishingJourney: {
      heading: "Book Marketing Services On Top Platforms For Your Books",
      paragraph: "Amazon book marketing services are good to help reach readers. With Amazon’s advertising console, you can pursue good advertising. We will help you out as our experts know how to sell books here. This includes custom ads exciting readers, using various techniques to attract the interest of readers, and more. It is possible to increase sales of books with our team as soon as they get published. Our team will help you know about the best Amazon advertising techniques.",
      image: bookPromotingImage,
    },
    CTA: {
      title: "No More Difficulty Selling Books With Convex Book Publishers",
      heading: "Our Team Will Pursue The Best Technique To Sell Your Book",
    },
    ourApproach: {
      heading: "You Will Be Happy When The Sales Of Your Book Occurs With Us.",
      Data:[
        {
          image: icon1,
          title: "Research To Know Target Audience",
          description: "Convex Book Publishers is perfect when it comes to research to find out who you target audience for your book is. With our research those who are interested in your genre will find your book therefore increasing sales."
        },
        {
          image: icon2,
          title: "Planned Marketing Process",
          description: "Our marketing promotion services help give you a planned approach allowing you to know what is occurring. With a full team of professionals working on your book, it will be known by those who matter."
        },
        {
          image: icon3,
          title: "Unique Approach To Your Promotional Requirements",
          description: "Every book is different and so we help you with a unique book marketing promotion procedure made perfect for your needs."
        }
      ]
    },

    letBeginsCTA: {
      heading: "Our Book Marketing Professional Can Make You Be Known By The World",
      paragraph: "Your book should get the attention it deserves. Our promotion experts can help increase sales of your book by attracting those who matter.",
    },
  },

  bookformattingContent: {
    heroSection: {
      herotitle: "Formatting Writing To Make It Perfect",
      heroHeading: "Formatting has been made simple!",
      heroParagraph: "Convex Book Publishers knows that following international standards is important and it can be tough following these as they interfere in the creativity and publishing procedure. With the help of our team, we can aid you out here."
    },
    publishingJourney: {
      heading: "Excellent Formatting Aims For Your Project",
      paragraph: "At Convex Book Publishers there is a team of experts who make certain that your book gets formatted allowing it to be ready to get published. The professionals keep in mind your formatting requirements carefully to employ that formatting type which is perfect for your target audience plus niches. By handling your formatting issues, we focus on your creativity, which is very important.",
      image: bookFormattingImage,
    },
    CTA: {
      title: "Not Knowing How To Market And Promote Your Work!",
      heading: "You May Need An Expert Book Marketer To Help With Promotion!",
    },
    ourApproach: {
      heading: "Our Virtual Book Marketing Strategy Helps Increase The Value Of Any Author.",
      Data:[
        {
          image: icon1,
          title: "Fast Turnarounds",
          description: "Your time is very precious and the one you spend with us matters much. Keeping time management as paramount, we have experienced staff who are well-trained. We are certain that you will get your formatted book in time."
        },
        {
          image: icon2,
          title: "Best Prices",
          description: "You can look at our formatting packages and choose the one best suited to your requirements."
        },
        {
          image: icon3,
          title: "Experienced",
          description: "Our formatting team at Convex Book Publishers has experience in this industry for many years, therefore allowing them to tackle much work in little time."
        }
      ]
    },


    letBeginsCTA: {
      heading: "Require Formatting That Is Of A High-Quality?",
      paragraph: "Our professionals are able to help you out here! We aim to allow your book to be written according to international standards.",
    },
  },

  ebookWritingContent: {
    heroSection: {
      herotitle: "Expert eBook Writing Solutions Delivered",
      heroHeading: "eBook Writing Services From Those Who Know What They Are Doing",
      heroParagraph: "Those who are looking for professional eBook writers who can give them unique eBook solutions for their needs. You have come to the correct place. Get a hold of us to begin your eBook journey."
    },
    publishingJourney: {
      heading: "Professional And Cost-Effective eBook Writing Services Given By Top Writers Which Will Impress.",
      paragraph: "Your writing activity should not be assigned to anyone. Convex Book Publishers are embarked on a mission to deliver top-notch yet cheap ebook writing service. A writer should be experienced and skilled. By working with us, you will have professional writers working on your eBook. It is up to you what style you want, and our writers will select the right words to get your work done. Hire eBook writers from our platform and we will make sure your idea is known and not wasted.",
      image: ebookImage,
    },
    CTA: {
      title: "Get Your eBook Made With No Hassles",
      heading: "Choose Convex Book Publishers To get eBook Writing Services So That Everything Is Stress-Free For You",
    },
    ourApproach: {
      heading: "Why Our eBook Writing Service Will Help You",
      Data:[
        {
          image: icon1,
          title: "Timely Submissions",
          description: "Our learned and professional eBook writer knows the importance of progress therefore we provide you with timely submissions. We, at Convex Book Publishers, fulfill all our commitments."
        },
        {
          image: icon2,
          title: "No Plagiarism",
          description: "It is our aim to give you work that is totally unique. We can ensure you that our experts use the best tools that can notice plagiarism."
        },
        {
          image: icon3,
          title: "Keeping To Subject",
          description: "It is necessary to keep the subject of an eBook in mind. Our professional writers always follow guidelines keeping to the theme that the client wants."
        }
      ]
    },

    letBeginsCTA: {
      heading: "Looking For High-end and Top-notch eBook Writers For Hire?",
      paragraph: "If you’re looking to hire eBook writers and want your book to be in an online format, get a hold of us. Our services are cost-effective and will let you get the services you need. Let your book be read by people online as well.",
    },
  },

  bookVideoContent: {
    heroSection: {
      herotitle: "Make Your Book Be Known With Online Videos",
      heroHeading: "Engaging Video Trailers To Attract Those Who Matter",
      heroParagraph: "The innovation in books has helped readers out. It is possible to have a video book trailer for a book so that it reaches many viewers. Let your readers be excited about your book before it is published."
    },
    publishingJourney: {
      heading: "Develop An Atmosphere Of Excitement Before The Launch Of Your Book With Video Book Trailers",
      paragraph: "With the help of video book trailers you can attract the reading community to your book. Videos tend to develop excitement in many audiences. With Convex Book Publishers you can promote your book on many platforms with an exciting video trailer.",
      image: bookVideoImage,
    },
    ourApproach: {
      heading: "An Exciting Video Trailer That Can Excite And Give Results",
      Data:[
        {
          image: icon1,
          title: "Fast Communication",
          description: "It can be tough conveying your idea to your readers, but video trailers can help. They effectively increase sales as well."
        },
        {
          image: icon2,
          title: "Simple Social Media Marketing",
          description: "A book trailer can give wonderful content for your book. Marketing statistics can be impacted with videos that attract more people. You can pursue a successful marketing strategy like this."
        },
        {
          image: icon3,
          title: "Different Approach",
          description: "We can make your message be known to readers in a clear way that will remain in their minds as well. Your book will become a part of their thinking."
        }
      ]
    },

    letBeginsCTA: {
      heading: "Take Advantage Of This Amazing Opportunity",
      paragraph: "If you want your book to become popular, contact us. You can allure more readers with video trailer services and that from across the globe.",
    },
  },

  authorWebsiteContent: {
    heroSection: {
      heroHeading: "Proceed In Making Yourself Be Known As An Author",
      heroParagraph: "If you are ready to show people the artist you are, you have come to the right place. Do you want to be known on the internet for your marvelous work and let this be accessible to people across the globe? Do you want to have your very own website? Introduce yourself to readers and let them know you are an author. Convex Book Publishers can help you in this journey of yours."
    },
    publishingJourney: {
      heading: "It Is Not Enough Only Being A Published Author; Get Known As A Best Seller With Your Own Website",
      paragraph: "If you want to be known as a best seller it is necessary to remain on top of the game. A website for an author can help you get the attention you require. Your readers can get to know who you are with your website. You can take the place that you deserve as a writer. With the help of the website that Convex Book Publishers will make for you, you can increase your audience and let them know about your book. You will get the platform which will let you publish your books easily.",
      image: authorWebsiteImage,
    },
    CTA: {
      title: "Want To Make The Book Selling Task Be Easier?",
      heading: "Allow Our Experts To Make A Website For You That Will Increase Sales",
    },
    ourApproach: {
      heading: 'It Is Our Duty To Enhance Your Position In The Market With Your Own Website.',
      Data:[
        {
          image: icon1,
          title: "More Viewers",
          description: "Your own author website can help you employ extra marketing skills to make certain that you rank higher on search engines. When more people can see you, you can become a better author."
        },
        {
          image: icon2,
          title: "Link With Readers",
          description: "Authors should not only be good writers. You need to connect with your particular readers. If you have an author website, you will have a community of readers who will know your work."
        },
        {
          image: icon3,
          title: "Develop Your Platform",
          description: "Your platform can be your website. We can help you launch this website so that it is engaging and can rank in search engine results."
        }
      ]
    },
    
    letBeginsCTA: {
      heading: "Want To Increase Exposure With Your Author’s Website?",
      paragraph: "If an author has an optimized and functional website, this can allow more exposure to occur. If you have a strong content-management system, it will be possible to track, alter, and customize your content as needed.",
    },
  },

  articleWritingContent: {
    heroSection: {
      herotitle: "Expert Ghostwriters For You",
      heroHeading: "Professional Article Writing By Experts",
      heroParagraph: "If you want to write an article which will appeal to many readers from different platforms, you have to have the skills. At Convex Boom Publishers, we have the professional writers who can do this for you. It is our aim to provide you with the best service that counts. With a strong marketing strategy, our team can help create a buzz for your new release."
    },
    publishingJourney: {
      heading: "With Experienced Writers Get The Content That You Need.",
      paragraph: "Whoever takes advantage of our service can get excellent quality work delivered to them. The articles let the writer become a top seller in their industry. Our team provides their creative potential to all, allowing you to get the work you need. Join us and get the excellent quality articles you deserve.",
      image: articleWritingImage,
    },
    CTA: {
      title: "Tough Selling Your Book?",
      heading: "We Provide The Best Book Marketer Who Can Promote It",
    },
    ourApproach: {
      heading: "We Aim To Increase The Value Of Authors With Our Strategy",
      Data:[
        {
          image: icon1,
          title: "Fast Results",
          description: "We have a talented team on our platform so you can find the author you need. You can forget about missed deadlines when you choose us. Convex Book Publishers will help you save your precious time and lets you concentrate on the important tasks."
        },
        {
          image: icon2,
          title: "Handle All Expenses",
          description: "Convex Book Publishers will not empty your pocket. You will select the article’s quality and length rewarding for what you order. You can check out our cost to find out more."
        },
        {
          image: icon3,
          title: "Enhance Your SEO With Personalized Content",
          description: "We will help you select the right keywords for you. You can use our advanced tools to create unique and optimized content that search engines will notice."
        }
      ]
    },
    letBeginsCTA: {
      heading: "Wish Your Book To Be Popular In The Market",
      paragraph: "We have the ghostwriters who can do your work for you. We provide you with the writing services that you are looking for.",
    },
  },



};

export default globalData;