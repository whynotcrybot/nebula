# nebula

> Add reviews to products. Reviews are checked and approved.

- [Prerequisites](#prerequisites)
- [How to use](#how-to-use)

## Prerequisites
- Docker
- Docker Compose

## How to use

Docker Compose scripts are executed by `make` command for convenience. Feel free to take a look inside `Makefile`.

### Run the app for development
```
make
```
API server will run on port 3000.

### Get list of reviews
```
make reviews
```

### Add new nice review, which is going to be approved.
```
make new_nice_review
```

### Add new bad review, which is NOT going to be approved.  
*NB!* If review text contains word "dog", it is considered to be bad and won't be approved.
```
make new_bad_review
```
