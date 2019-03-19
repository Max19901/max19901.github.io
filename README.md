# MSlider

Simple slider ( native JS )

### Documentation

This slider has small customizable settings.

```php
let slider = new MSlider({
    autoplay: false, 
    pagination: true, 
    reverse: false, 
    delay: 4000 
    })
 
```
1. autoplay

Auto change slides , false - default
```php
    autoplay: false
```
2. pagination

Show pagination block, false - default
```php
    pagination: true, 
```
3. reverse

Change the direction of the slider, false - default
```php
    reverse: false
```
4. delay

Delay on change slide,  default - 4000ms
```php
  delay: 4000 
```

### Version
0.0.2 Beta

### Basic Usage
```html
  <div class="mSlider">
    <div class="mSlide active">
      <img src="https://cdn.stocksnap.io/img-thumbs/960w/QUXNHAIOCK.jpg" alt="">
			<div class="slider-content">
				<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
			</div>
    </div>
    <div class="mSlide">
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/ZY41T9GFX7.jpg">
			<div class="slider-content">
				<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
			</div>
    </div>
    <div class="mNavigation">
      <button class="mPrev mBtn" data-attr="Prev">Prev</button>
      <button class="mNext mBtn" data-attr="Next">Next</button>
    </div>
  </div>
```
### CSS

### JavaScript
```php
let slider = new MSlider({
  autoplay: true
})
```

Developed by Maksym Shvets

[Github Profile](http://example.com/)
