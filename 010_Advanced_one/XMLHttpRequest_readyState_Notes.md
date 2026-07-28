# XMLHttpRequest.readyState

The **`readyState`** property tells you the current state of an
**XMLHttpRequest (XHR)** while it is processing an HTTP request.

## States

### 0 --- UNSENT

-   XHR object has been created.
-   `open()` has **not** been called yet.

``` javascript
const xhr = new XMLHttpRequest();
console.log(xhr.readyState); // 0
```

------------------------------------------------------------------------

### 1 --- OPENED

-   `open()` has been called.
-   Request is configured.
-   You can now call `send()`.

``` javascript
xhr.open("GET", "https://example.com");
console.log(xhr.readyState); // 1
```

------------------------------------------------------------------------

### 2 --- HEADERS_RECEIVED

-   `send()` has been called.
-   Response headers and HTTP status are available.

Available properties: - `xhr.status` - `xhr.statusText` -
`xhr.getAllResponseHeaders()`

------------------------------------------------------------------------

### 3 --- LOADING

-   Browser is downloading the response.
-   `responseText` contains **partial** data.
-   This state may occur multiple times.

Useful for: - Download progress - Streaming responses

------------------------------------------------------------------------

### 4 --- DONE

-   Request has finished (success or failure).
-   Full response is available.

``` javascript
if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
}
```

------------------------------------------------------------------------

## Request Lifecycle

``` text
Create XMLHttpRequest
        ↓
0 → UNSENT
        ↓
open()
        ↓
1 → OPENED
        ↓
send()
        ↓
2 → HEADERS_RECEIVED
        ↓
3 → LOADING
        ↓
4 → DONE
```

## Interview Questions

**Q. Which state means `open()` has been called?**\
**Answer:** `1 (OPENED)`

**Q. Which state means the request is complete?**\
**Answer:** `4 (DONE)`

**Q. At which state can you read the HTTP status code?**\
**Answer:** `2 (HEADERS_RECEIVED)`

**Q. At which state is the full response available?**\
**Answer:** `4 (DONE)`

**Q. Which state may occur multiple times?**\
**Answer:** `3 (LOADING)`

## Memory Trick

    State Meaning
  ------- ------------------
        0 Object Created
        1 Opened
        2 Headers Received
        3 Loading
        4 Done

**Mnemonic:** **Create → Open → Headers → Loading → Done**

