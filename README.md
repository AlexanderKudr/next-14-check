## Another "great" experience when checking new version of NextJS
- Aggresive caching still here (1 year passed)
- Fast refresh is unstable(still)
- Turbopack unstable
- Cannot resolve bcrypt or fs modules (now you need to pack this into external packages in config)
- Invoices chapter is completely broken (you can't bind id to invoice)
- Installed packages could opt-out even reopening editor not help at all (only reinstall)
- Optimizing Images is broken but next team claims everything is fine
  ImageError: Unable to optimize image and unable to fallback to upstream image
  at imageOptimizer (C:\Users\Desktop\Coding\Projects\Web\next-14-check\node_modules\next\dist\server\image-optimizer.js:659:19)

- A lot of React Canary features represented as stable (RSC)
- App router is still a huge mess, vision that bring too much cost for the servers
- Better still use as frontend shell

### TLDR This was the most frustrating experience with NextJS

    - Sometimes I feel devs at Vercel rushing too fast, it seems like 2.3+ issues are not enough already, let's     bring more instability
    - Could not even finish the course, link below, because how ridiculously this unstable was

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


## Update with issues with extensive experience in nextjs (currently 14.2.3)
- 3k ISSUES ON GITHUB!!!!! check [here](https://github.com/vercel/next.js/issues)

- horrible dev experience (pnpm takes a few seconds, initial load like 3-10 seconds)

- try clicking on a link to another page and its another 5 seconds to compile)

- nextjs devserver hard reloads randomly without any file for no reason

- turbo mode doesn't work in docker compose even with watchpolls and other hacky solutions

- they say app/pages migration is incremental but it's a hard refresh between the apps so it will not work for most

- nested layouts didn't work for me for some weird reason, outer chrome didn't show up

- their issues in github repo is a nightmare, so many problems and the answer is always "try latest canary because it included many fixes" and when lrobinson2011 tells people to file bugs and repos, they just get closed without resolution by bots

- I absolutely love the community where whenever we say there are problems, the answer is always, it's not nextjs's fault, you are doing something wrong, go read the docs. If a framework is so un-userfriendly that you can go wrong so easily, I almost feel like in order to do things correctly you'll need to do a nextjs doc certification or something.. and it's not like the doc is comprehensive or anything, most problems and solutions you've encountered are actually described in the issues, not docs
  
- revalidate path/tag is messed up (sometimes it works, sometimes it is not. This is in production)
  
- cache and builds are different for dev and prod versions. Just to test stuff you need to build it and then check if it is even working

  And after all these issues the dx is totally bad, slow and frustrating. Sometimes i feel these changes after version 12 is just not only vision, but to earn more money for Vercel.
