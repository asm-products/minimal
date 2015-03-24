##General Guidelines

* Anyone can fork and send a Pull Request (It's the only way we support)
* Run the app locally before committing.
* Please ensure that you have synced with the upstream minimal branch. This ensures that merges go smoothly.

##Getting Started

### Requirements

* MongoDB
* NodeJS

### Install

1. Fork git repo @ https://github.com/asm-products/minimal

2. Set repo to sync to upstream

3. Run `npm install` to download all libs

4. Install node-foreman

   ```npm install -g foreman```
   
5. Couple of ways to run the app:
    * Your local environment: "nf start --env config/.env_yourname"
    * Using Staging environment vars: "nf start --env config/.env_staging"

##Github

* [Merging an upstream repository into your fork](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/)
* [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)
