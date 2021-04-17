// tests go here; this will not be compiled when this package is used as an extension.
Fingerprint.initFingerprint(SerialPin.P15,SerialPin.P16)
if (Fingerprint.deletfig(0)) {
    basic.showNumber(1)
}

basic.forever(function () {
    basic.showString(Fingerprint.Fingersearch())
    Fingerprint.waitfig()
})